import { useDispatch } from "react-redux";
//Actions
import allActions from "../actions";
//Helpers
import { getLocalStorage, setLocalStorage, clearLocalStorage } from "../helpers/localStorage";

export const useAlreadyLogged = (logged) => {
  const resp = useCheckLocalStorageExpired();
  const dispatch = useDispatch();
  if (!resp) {
    const isLoggedStorage = getLocalStorage("logged");
    const nombre = getLocalStorage("nombre");
    const mock = getLocalStorage("mock");
    if (isLoggedStorage && !logged) {
      dispatch(allActions.globalActions.setLogged(true));
      dispatch(allActions.globalActions.setProfile({ nombre: nombre, mock: mock }));
    }
    if (!isLoggedStorage && logged) {
      setLocalStorage("logged", true);
    }
  }
};

const useCheckLocalStorageExpired = () => {
  const created = getLocalStorage("created");
  const now = new Date();
  const now_ms = now.getTime();
  const timeExpired = created + 1000 * 60 * 60 * 24;
  if (created + timeExpired < now_ms) {
    clearLocalStorage();
    return true;
  } else {
    return false;
  }
};
