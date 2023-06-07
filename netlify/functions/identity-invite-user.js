exports.handler = async (event, context) => {
  const { identity } = context.clientContext;
  const inviteUrl = `${identity.url}/invite`;
  const adminAuthHeader = "Bearer " + identity.token;

    try {
      return fetch(inviteUrl, {
        method: "POST",
        headers: { Authorization: adminAuthHeader },
        body: JSON.stringify({ email: "example@example.com" })
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Invited a user! 204!");
        console.log(JSON.stringify({ data }));
        return { statusCode: 204 };
      })
      .catch(e => {return e});
  } catch (e) { return e; };
};