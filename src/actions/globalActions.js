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

const setMock = (data) => {
  return {
    type: "SET_MOCK",
    payload: data,
  };
};

export default { setLogged, setPeriodo, setMock };
