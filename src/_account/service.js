import { Subject } from 'rxjs';

import { wrapperFetch } from "../_components";
import { auth_strategy, netlifyURL } from '../auth';

const userSubject = new Subject(null);

export const accountService = {
  login,
  register,
  logout,
  user: userSubject.asObservable(),
  get userValue () { return userSubject.value }
};

function login(email, password) {
  return auth_strategy.login(email, password, true).then(user => {
    // publish user to subscribers and start timer to refresh token
    userSubject.next(user);
    // startRefreshTokenTimer();
    return user;
  });
}

function register(params) {
  return auth_strategy.signup(params);
}

function logout() {
  return auth_strategy.logout();
}
