import {
  apiUrl,
  POSTS_LOADED_FAIL,
  POSTS_LOADED_SUCCESS,
  SET_SHOW_TOAST,
} from "../../utils/constants";
import axios from "axios";

export const getPostsAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${apiUrl}/posts`,
        method: "GET",
      });
      if (result.data.success) {
        dispatch({
          type: POSTS_LOADED_SUCCESS,
          posts: result.data.posts,
        });
      }
      console.log(result);
    } catch (error) {
      dispatch({
        type: POSTS_LOADED_FAIL,
      });
    }
  };
};

export const addPostAction = (newPost) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${apiUrl}/posts`,
        data: newPost,
        method: "POST",
      });
      if (result.data.success) {
        dispatch({
          type: SET_SHOW_TOAST,
          showToast: {
            show: true,
            message: result.data.message,
            type: result.data.success ? "success" : "danger",
          },
        });
        dispatch(getPostsAction());
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };
};

export const updatePostAction = (updatedPost) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${apiUrl}/posts/${updatedPost._id}`,
        data: updatedPost,
        method: "PUT",
      });
      if (result.data.success) {
        dispatch(getPostsAction());
        dispatch({
          type: SET_SHOW_TOAST,
          showToast: {
            show: true,
            message: result.data.message,
            type: result.data.success ? "success" : "danger",
          },
        });
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };
};

export const deletePostAction = (postId) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${apiUrl}/posts/${postId}`,
        method: "DELETE",
      });
      if (result.data.success) {
        dispatch(getPostsAction());
        dispatch({
          type: SET_SHOW_TOAST,
          showToast: {
            show: true,
            message: result.data.message,
            type: result.data.success ? "success" : "danger",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
