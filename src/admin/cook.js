export const adminCookie = (value) => {
  const content = JSON.stringify(value);
  localStorage.setItem('content', content);
}