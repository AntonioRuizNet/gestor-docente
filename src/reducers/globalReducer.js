const initialState = {
  logged: false,
  periodo: "",
  profile: { nombre: "", mock: "true" },
  floatMessage: { text: "", state: 0, activate: false },
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
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    case "SET_FLOAT_MESSAGE":
      return {
        ...state,
        floatMessage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
