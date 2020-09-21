import {
  GET_POSTS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "../types/types";
import baseURL from "../api/api";

const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

const getUsersError = (errMsg) => {
  return {
    type: GET_USERS_ERROR,
    payload: errMsg,
  };
};

export const getUsers = () => async (dispatch) => {
  dispatch(getUsersRequest);
  await baseURL
    .get("/users?limit=10")
    .then((response) => {
      const users = response.data;
      dispatch(getUsersSuccess(users));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(getUsersError(errMsg));
    });
};
