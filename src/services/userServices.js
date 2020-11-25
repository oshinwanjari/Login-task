import authHeader from "../helpers/authHeader";

const userServices = {
  login
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch(`/`, requestOptions).then((user) => {
    if (user) {
      user.authdata = window.btoa(username + ":" + password);
      localStorage.setItem("user", JSON.stringify(user));
    }

    return user;
  });
}

export default userServices;
