import GoTrue from 'gotrue-js';

const loc = document.location;
const netlifyURL = `${loc.protocol}//${loc.hostname}/.netlify/identity`;

const auth_strategy = new GoTrue({
  APIUrl: netlifyURL,
  audience: '',
  setCookie: true
});

export { netlifyURL, auth_strategy };