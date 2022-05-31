//Helpers
import { getLocalStorage } from "./../helpers/localStorage";

const baseUrl = "https://gestordocente.com/back/index.php/api/action";

export const idUser = () => {
  const id = getLocalStorage("token").substring(6, 4);
  return id;
};

export const getProfile = baseUrl + "/GET_PROFILE";
export const setProfile = baseUrl + "/SET_PROFILE";
export const checkEmail = baseUrl + "/CHECK_EMAIL";

export const getAccounts = baseUrl + "/GET_ACCOUNTS";
export const updateAccount = baseUrl + "/UPDATE_ACCOUNT";
export const removeAccount = baseUrl + "/REMOVE_ACCOUNT";
