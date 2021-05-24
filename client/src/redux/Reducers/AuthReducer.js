const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH": {
      console.log(action);
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        user: action.user,
      };
    }
    default:
      return state;
  }
};
