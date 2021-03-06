function configureFakeBackend() {
  let users = [
    {
      id: 1,
      username: "hruday@gmail.com",
      password: "hruday123",
      firstName: "Hruday",
      lastName: "User"
    }
  ];
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (opts && opts.method === "POST") {
          let params = JSON.parse(opts.body);

          let filteredUsers = users.filter((user) => {
            return (
              user.username === params.username &&
              user.password === params.password
            );
          });

          if (filteredUsers.length) {
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson))
            });
          } else {
            reject("Username or password is incorrect");
          }

          return;
        }

        if (opts && opts.method === "GET") {
          if (
            opts.headers &&
            opts.headers.Authorization ===
              `Basic ${window.btoa("hruday@gmail.com:hruday123")}`
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users))
            });
          } else {
            resolve({ status: 401, text: () => Promise.resolve() });
          }

          return;
        }

        realFetch(url, opts).then((response) => resolve(response));
      }, 500);
    });
  };
}
export default configureFakeBackend;
