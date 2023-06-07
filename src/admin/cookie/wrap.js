import { servicePack } from "./service";

export const wrapFetch = {
  get,
  post,
  put,
  delete: _delete
};

function get(url) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(url)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    credentials: 'include',
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);    
}

function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(url)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// Helper function
function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = servicePack.userValue;
  const isLoggedIn = user && user.jwtToken;
  const isApiUrl = url.startsWith('https://localhost:5120');
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.jwtToken}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    
    if (!response.ok) {
      if ([401, 403].includes(response.status) && servicePack.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
