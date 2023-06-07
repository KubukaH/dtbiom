exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext;
  const userID = user.sub;
  const userUrl = `${identity.url}/admin/users/{${userID}}`;
  const adminAuthHeader = `Bearer ${identity.token}`;

  try {
    return fetch(userUrl, {
      method: 'DELETE',
      headers: { Authorization: adminAuthHeader },
    })
      .then((response) => {
        console.log('Deleted a user!');
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        return { statusCode: 204 };
      })
      .catch((error) => ({
          statusCode: 500,
          body: `Internal Server Error: ${error}`,
        }));
  } catch (error) {
    return error;
  }
};