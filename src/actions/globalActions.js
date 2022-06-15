const setLogged = (data) => {
  return {
    type: "SET_LOGGED",
    payload: data,
  };
};

const setPeriodo = (data) => {
  return {
    type: "SET_PERIODO",
    payload: data,
  };
};

const setProfile = (data) => {
  return {
    type: "SET_PROFILE",
    payload: data,
  };
};

const setFloatMessage = (data) => {
  return {
    type: "SET_FLOAT_MESSAGE",
    payload: data,
  };
};

export default { setLogged, setPeriodo, setProfile, setFloatMessage };
