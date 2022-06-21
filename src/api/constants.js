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

export const sendMensaje = baseUrl + "/SEND_MENSAJE";
export const getMensajes = baseUrl + "/GET_MENSAJES";

export const insertVisita = baseUrl + "/INSERT_VISITA";
export const getAdminData = baseUrl + "/GET_ADMIN_DATA";

export const roadMap = [
  { name: "Ficha del alumno", done: true },
  { name: "Gestión de asistencias", done: true },
  { name: "Gestión de notas", done: true },
  { name: "Asignaturas y cursos", done: true },
  { name: "Evaluaciones y exámenes", done: true },
  { name: "Informes en PDF", done: false },
  { name: "Estadísticas en escritorio", done: true },
  { name: "Generador de operaciones", done: false },
  { name: "Gestión de tutorías", done: false },
  { name: "Diario", done: false },
  { name: "Horario", done: false },
  { name: "Agenda", done: false },
  { name: "Plano de la clase", done: false },
  { name: "Recordatorios", done: false },
];
