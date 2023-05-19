export const wrapperFetch = {
  get,
  post,
  put,
  delete: _delete
};

function get(url) {
  const requestOptions = {
    method: 'GET',
    headers: {}
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);    
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: {}
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = JSON.parse(text);
    
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
