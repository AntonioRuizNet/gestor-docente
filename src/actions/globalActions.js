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

export default { setLogged, setPeriodo, setProfile };
