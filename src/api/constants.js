//Helpers
import { getLocalStorage } from "./../helpers/localStorage";

const baseUrl = "https://gestordocente.com/back/index.php/api/action";

export const idUser = () => {
  const id = getLocalStorage("token")?.substring(6, 4);
  return id;
};

export const getPeriodos = baseUrl + "/GET_PERIODOS";

export const getProfile = baseUrl + "/GET_PROFILE";
export const setProfile = baseUrl + "/SET_PROFILE";
export const checkEmail = baseUrl + "/CHECK_EMAIL";
export const getPerfil = baseUrl + "/GET_PERFIL";
export const updateProfile = baseUrl + "/UPDATE_PROFILE";

export const getAccounts = baseUrl + "/GET_ACCOUNTS";
export const createAccount = baseUrl + "/CREATE_ACCOUNT";
export const removeAccount = baseUrl + "/REMOVE_ACCOUNT";
export const updateAsistencias = baseUrl + "/UPDATE_ASISTENCIAS";

export const updateContextoEscolar = baseUrl + "/UPDATE_CONTEXTO_ESCOLAR";
export const updateContextoPersonal = baseUrl + "/UPDATE_CONTEXTO_PERSONAL";
export const updateContextoFamiliar = baseUrl + "/UPDATE_CONTEXTO_FAMILIAR";
export const updateContextoMedico = baseUrl + "/UPDATE_CONTEXTO_MEDICO";

export const updateNotas = baseUrl + "/UPDATE_NOTAS";

export const getConfiguraciones = baseUrl + "/GET_CONFIGURACIONES";
export const updateConfigurador = baseUrl + "/UPDATE_CONFIGURACIONES";
export const updateEvaluaciones = baseUrl + "/UPDATE_EVALUACIONES";
