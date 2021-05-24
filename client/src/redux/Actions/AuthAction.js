import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../../utils/constants";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
// Get info
export const loadUserAction = () => {
  return async (dispatch) => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
      let result = await axios({
        url: `${apiUrl}/auth`,
        method: "GET",
      });
      console.log(result.data);
      if (result.data.success) {
        dispatch({
          type: "SET_AUTH",
          isAuthenticated: true,
          user: result.data.user,
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        isAuthenticated: false,
        user: null,
      });
    }
  };
};

//Login
export const loginUserAction = (userForm) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${apiUrl}/auth/login`,
        method: "POST",
        data: userForm,
      });
      if (result.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, result.data.accessToken);
      }
      dispatch(loadUserAction());

      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
};

//Register
export const registerUserAction = (userForm) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${apiUrl}/auth/register`,
        method: "POST",
        data: userForm,
      });
      if (result.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, result.data.accessToken);
      }
      dispatch(loadUserAction());

      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
};

//Logout
export const logoutUserAction = () => {
  return (dispatch) => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    return dispatch({
      type: "SET_AUTH",
      isAuthenticated: false,
      user: null,
    });
  };
};
