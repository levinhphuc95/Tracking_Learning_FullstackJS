export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://git.heroku.com/peaceful-lowlands-51657.git/api";

export const LOCAL_STORAGE_TOKEN_NAME = "JustOne";

export const POSTS_LOADED_SUCCESS = "POSTS_LOADED_SUCCESS";
export const POSTS_LOADED_FAIL = "POSTS_LOADED_FAIL";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const FIND_POST = "FIND_POST";
export const SHOW_UPDATE_POST_MODAL = "SHOW_UPDATE_POST_MODAL";
export const SHOW_ADD_POST_MODAL = "SHOW_ADD_POST_MODAL";
export const SET_SHOW_TOAST = "SET_SHOW_TOAST";
