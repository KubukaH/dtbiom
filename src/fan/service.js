import { wrapperFetch } from "../_components";

const baseUrl = "http://localhost:5152";

export const messageService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,

  // Make likes
  makeLike,
  getMsgLike,
  unLike
};

function getAll() {
  return wrapperFetch.get(`${baseUrl}/msgs`);
}

function getById(id) {
  return wrapperFetch.get(`${baseUrl}/${id}`);
}

function create(params) {
  return wrapperFetch.post(`${baseUrl}/msg/create`, params);
}

function update(id, params) {
  return wrapperFetch.put(`${baseUrl}/${id}`, params)
    .then(data => {
      return data;
    });
}

function _delete(id) {
  return wrapperFetch.delete(`${baseUrl}/${id}`)
    .then(x => {
      return x;
    });
}

function makeLike(params) {
  return wrapperFetch.post(`${baseUrl}/like`, params);
}

function getMsgLike(id) {
  return wrapperFetch.get(`${baseUrl}/likes`, id);
}

function unLike(id) {
  return wrapperFetch.delete(`${baseUrl}/unlike`, id);
}
