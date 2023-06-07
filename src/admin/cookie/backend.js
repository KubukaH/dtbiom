export { adminCookieServer };

// array in local storage for admins
const db_Key = 'biomudimba-admin-cookie-server';
const admins = JSON.parse(localStorage.getItem(db_Key)) || [];

function adminCookieServer() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {   
        const { method } = opts;             
        switch (true) {
          case url.endsWith('/admin/confirm-cookie') && method === 'POST':
            return authenticate();
          case url.endsWith('/admin/re-token') && method === 'POST':
            return refreshToken();
          case url.endsWith('/admin/un-token') && method === 'POST':
            return revokeToken();
          case url.endsWith('/admin/cks') && method === 'GET':
            return getUsers();
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then(response => resolve(response))
              .catch(error => reject(error));
        }
      }

      // route functions
      function authenticate() {
        const { username } = body();

        if (admins.find(x => x.username !== username)) {
          createUser();
        }

        const user = admins.find(x => x.username === username);

        // add refresh token to user
        user.refreshTokens.push(generateRefreshToken());
        user.confirmed = true;

        localStorage.setItem(db_Key, JSON.stringify(admins));

        return ok({
          id: user.id,
          username: user.username,
          confirmed: user.confirmed,
          jwtToken: generateJwtToken()
        });
      }
    
      function createUser() {
        const user = body();

        // assign user id and a few other properties then save
        user.confirmed = false;
        user.id = newUserId();
        user.dateCreated = new Date().toISOString();
        user.refreshTokens = [];
        admins.push(user);
        localStorage.setItem(db_Key, JSON.stringify(admins));

        return ok();
      }

      function refreshToken() {
        const refreshToken = getRefreshToken();
        
        if (!refreshToken) return unauthorized();

        const user = admins.find(x => x.refreshTokens.includes(refreshToken));
        
        if (!user) return unauthorized();

        // replace old refresh token with a new one and save
        user.confirmed = true;
        user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
        user.refreshTokens.push(generateRefreshToken());
        localStorage.setItem(db_Key, JSON.stringify(admins));

        return ok({
          id: user.id,
          username: user.username,
          confirmed: user.confirmed,
          jwtToken: generateJwtToken()
        });
      }

      function revokeToken() {
        if (!isLoggedIn()) return unauthorized();
        
        const refreshToken = getRefreshToken();
        const user = admins.find(x => x.refreshTokens.includes(refreshToken));
        
        // revoke token and save
        user.confirmed = false;
        user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
        localStorage.setItem(db_Key, JSON.stringify(admins));

        return ok();
      }

      function getUsers() {
        if (!isLoggedIn()) return unauthorized();
        return ok(admins);
      }

      // helper functions

      function ok(body) {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
      }

      function unauthorized() {
        resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) })
      }

      function isLoggedIn() {
        // check if jwt token is in auth header
        const authHeader = opts.headers['Authorization'] || '';
        if (!authHeader.startsWith('Bearer admin-cookie-jwt-token'))
            return false;

        // check if token is expired
        try {
          const jwtToken = JSON.parse(atob(authHeader.split('.')[1]));
          const tokenExpired = Date.now() > (jwtToken.exp * 1000);
          if (tokenExpired)
            return false;
        } catch {
          return false;
        }

        return true;
      }

      function body() {
        return opts.body && JSON.parse(opts.body);
      }

      function newUserId() {
        return admins.length ? Math.max(...admins.map(x => x.id)) + 1 : 1;
      }

      function generateJwtToken() {
        // create token that expires in 15 minutes
        const tokenPayload = { exp: Math.round(new Date(Date.now() + 15*60*1000).getTime() / 1000) }
        return `admin-cookie-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
      }

      function generateRefreshToken() {
        const token = new Date().getTime().toString();

        // add token cookie that expires in 3 hours
        const expires = new Date(Date.now() + 3*60*60*1000).toUTCString();
        document.cookie = `adminRefreshToken=${token}; expires=${expires}; path=/`;

        return token;
      }

      function getRefreshToken() {
        // get refresh token from cookie
        return (document.cookie.split(';').find(x => x.includes('adminRefreshToken')) || '=').split('=')[1];
      }
    });
  }
}