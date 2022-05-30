const setLogged = (data) => {
  return {
    type: "SET_LOGGED",
    payload: data,
  };
};

export default { setLogged };
