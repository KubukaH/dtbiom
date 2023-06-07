import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext;
  const userID = user.sub;
  const usersUrl = `${identity.url}/admin/users`;
  const adminAuthHeader = "Bearer " + identity.token;

  try {
    return fetch(usersUrl, {
      method: "POST",
      headers: { Authorization: adminAuthHeader },
      body: JSON.stringify({ email: "new-email@netlify.com", password: "newpw", confirm: true })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Created a user! 204!");
        console.log(JSON.stringify({ data }));
        return { statusCode: 204 };
      })
      .catch(e => {return e});
  } catch (e) {
    return e;
  }
};