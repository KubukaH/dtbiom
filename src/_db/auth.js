import GoTrue from 'gotrue-js';

const netlifyURL = `https://dtbiomudimba.netlify.app/.netlify/identity`;

const auth_strategy = new GoTrue({
  APIUrl: netlifyURL,
  audience: '',
  setCookie: true
});

export { netlifyURL, auth_strategy };