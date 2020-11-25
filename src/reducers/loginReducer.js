import userConstants from "../constants/userConstants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

function authentication(state = initialState, action) {
  if (userConstants) {
    switch (action.type) {
      case userConstants.LOGIN_REQUEST:
        return {
          loggingIn: true,
          user: action.user
        };
      case userConstants.LOGIN_SUCCESS:
        return {
          loggedIn: true,
          user: action.user
        };
      case userConstants.LOGIN_FAILURE:
        return {};

      default:
        return state;
    }
  }
}

export default authentication;
