const initialState = {
  logged: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGGED":
      return {
        ...state,
        logged: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
