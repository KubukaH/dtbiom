const adminKey = 'biom-webapi-cookie';
let admins = JSON.parse(localStorage.getItem(adminKey)) || [];

export const cookieStore = {
  store,
  renewToken,
  tokenRevoke
};

function store( username, email ) {

  if (admins.find(x => x.username === username) === (null || undefined)) {
    createAdminCookie(username, email);
  }

  const admin = admins.find(x => x.username === username);

  admin.adminCookieTokens.push(generateRefreshToken());
  
  localStorage.setItem(adminKey, JSON.stringify(admins));

  return ok({
    id: admin.id,
    username: admin.username,
    email: admin.email,
    confirmed: admin.confirmed,
    tempJwt: generateJwtToken(admin)
  });

}

function renewToken() {
  const refreshToken = getRefreshToken();
  
  if (!refreshToken) return unauthorized();

  const admin = admins.find(x => x.adminCookieTokens.includes(refreshToken));
  
  if (!admin) return unauthorized();

  // replace old refresh token with a new one and save
  admin.adminCookieTokens = admin.adminCookieTokens.filter(x => x !== refreshToken);
  admin.adminCookieTokens.push(generateRefreshToken());

  localStorage.setItem(adminKey, JSON.stringify(admins));

  return ok({
      id: admin.id,
      username: admin.username,
      email: admin.email,
      confirmed: admin.confirmed,
      tempJwt: generateJwtToken(admin)
  })
}

function tokenRevoke() {
  // if (!isAuthenticated()) return unauthorized();
  
  const refreshToken = getRefreshToken();
  const admin = admins.find(x => x.adminCookieTokens.includes(refreshToken));
  
  // revoke token and save
  admin.adminCookieTokens = admin.adminCookieTokens.filter(x => x !== refreshToken);
  localStorage.setItem(adminKey, JSON.stringify(admins));

  return ok();
}

// Helper Create Admin Cookie
function createAdminCookie( username, email ) {
  // assign admin id and a few other properties then save
  const admin = {
    id: newUserId(),
    username: username,
    email: email,
    confirmed: false,
    dateCreated: new Date().toISOString(),
    adminCookieTokens: []
  };

  admins.push(admin);

  localStorage.setItem(adminKey, JSON.stringify(admins));

  return ok();
}

function ok(body) {
  Promise.resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
}

function newUserId() {
  return admins.length ? Math.max(...admins.map(x => x.id)) + 1 : 1;
}

function generateJwtToken(user) {
  // create token that expires in 15 minutes
  const tokenPayload = { 
    exp: Math.round(new Date(Date.now() + 15*60*1000).getTime() / 1000),
    id: user.id
  }
  return `temp-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
}

function getRefreshToken() {
  // get refresh token from cookie
  return (document.cookie.split(';').find(x => x.includes('adminRefreshToken')) || '=').split('=')[1];
}

function unauthorized() {
  Promise.resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
}

function generateRefreshToken() {
  const token = new Date().getTime().toString();

  const expires = new Date(Date.now() + 2*60*60*1000).toUTCString();

  // add token cookie that expires in 24 days
  document.cookie = `adminRefreshToken=${token}; expires=${expires}; path=/admin; SameSite=None; Secure`;

  return token;
}

function isAuthenticated() {
  return !!currentUser();
}

function currentUser() {
  // check if jwt token is in auth header
  const authHeader = opts.headers['Authorization'] || '';
  if (!authHeader.startsWith('Bearer temp-jwt-token')) return;

  // check if token is expired
  const jwtToken = JSON.parse(atob(authHeader.split('.')[1]));
  const tokenExpired = Date.now() > (jwtToken.exp * 1000);
  if (tokenExpired) return;

  const user = admins.find(x => x.id === jwtToken.id);
  return user;
}
