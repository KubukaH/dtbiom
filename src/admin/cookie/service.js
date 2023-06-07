import { BehaviorSubject } from 'rxjs';
import { wrapFetch } from './wrap';

const adminSubject = new BehaviorSubject(null);

export const servicePack = {
  signin,
  logout,
  refreshToken,
  user: adminSubject.asObservable(),
  get userValue () { return adminSubject.value }
}

function signin(body) {
  return wrapFetch.post(`${document.location.href}/confirm-cookie`, body).then((user) => {
    adminSubject.next(user);
    startRefreshTokenTimer();
    return user;
  });
}

function logout() {
  wrapFetch.post(`${document.location.href}/un-token`, {});
  stopRefreshTokenTimer();
  adminSubject.next(null);
}

function refreshToken() {
  return wrapFetch.post(`${document.location.href}/re-token`, {}).then((user) => {
    adminSubject.next(user);
    startRefreshTokenTimer();
    return user;
  });
}


// helper functions
let refreshTokenTimeout;

function startRefreshTokenTimer() {
  // parse json object from base64 encoded jwt token
  const jwtToken = JSON.parse(atob(adminSubject.value.jwtToken.split('.')[1]));

  // set a timeout to refresh the token a minute before it expires
  const expires = new Date(jwtToken.exp * 1000);
  const timeout = expires.getTime() - Date.now() - (60 * 1000);
  refreshTokenTimeout = setTimeout(refreshToken, timeout);
}

function stopRefreshTokenTimer() {
  clearTimeout(refreshTokenTimeout);
}
