import {
  FIND_POST,
  POSTS_LOADED_FAIL,
  POSTS_LOADED_SUCCESS,
  SET_SHOW_TOAST,
  SHOW_ADD_POST_MODAL,
  SHOW_UPDATE_POST_MODAL,
} from "../../utils/constants";

const initialState = {
  post: null,
  posts: [],
  postsLoading: true,
  showToast: {
    show: false,
    message: "",
    type: null,
  },
  showAddPostModal: false,
  showUpdatePostModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADED_SUCCESS:
      return { ...state, posts: action.posts, postsLoading: false };
    case POSTS_LOADED_FAIL:
      return { ...state, posts: [], postsLoading: false };
    case FIND_POST:
      return { ...state, post: action.post };
    case SHOW_ADD_POST_MODAL:
      return { ...state, showAddPostModal: action.showAddPostModal };
    case SHOW_UPDATE_POST_MODAL:
      return { ...state, showUpdatePostModal: action.showUpdatePostModal };
    case SET_SHOW_TOAST:
      return { ...state, showToast: action.showToast };
    default:
      return state;
  }
};
