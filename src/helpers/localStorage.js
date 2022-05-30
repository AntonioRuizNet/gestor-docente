const setLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};

const removeItemLocalStorage = (name) => {
  localStorage.removeItem(name);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export {
  setLocalStorage,
  getLocalStorage,
  removeItemLocalStorage,
  clearLocalStorage,
};
