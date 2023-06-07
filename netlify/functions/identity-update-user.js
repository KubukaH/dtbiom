exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext;
  const userID = user.sub;
  const userUrl = `${identity.url}/admin/users/${userID}`;
  const adminAuthHeader = "Bearer " + identity.token;

  try {
    return fetch(userUrl, {
      method: "PUT",
      headers: { Authorization: adminAuthHeader },
      body: JSON.stringify({ app_metadata: { roles: ["superstar"] } })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Updated a user! 204!");
        console.log(JSON.stringify({ data }));
        return { statusCode: 204 };
      })
      .catch((e) => {return e});
  } catch (e) { return e; }
};