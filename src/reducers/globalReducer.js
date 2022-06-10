const initialState = {
  logged: false,
  periodo: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGGED":
      return {
        ...state,
        logged: action.payload,
      };
    case "SET_PERIODO":
      return {
        ...state,
        periodo: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
