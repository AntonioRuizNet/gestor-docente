import {
  idUser,
  getAccounts,
  removeAccount,
  createAccount,
  updateAsistencias,
  updateContextoEscolar,
  updateContextoFamiliar,
  updateContextoPersonal,
  updateContextoMedico,
  updateNotas,
} from "./../../constants";

export const get_Accounts = (periodo) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("periodo", periodo);

  return fetch(getAccounts, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
};

export const remove_Account = (id) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("id", id);

  return fetch(removeAccount, { method: "POST", body: formData })
    .then((response) => {
      return response.ok;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const update_Asistencias = (idContacto, fecha, valor, obs, periodo) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("idContacto", idContacto);
  formData.append("fecha", fecha);
  formData.append("valor", valor);
  formData.append("obs", obs);
  formData.append("periodo", periodo);

  return fetch(updateAsistencias, { method: "POST", body: formData })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateData = (type, data) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("json", JSON.stringify(data));
  let apiCall = "";

  if (type === "updateContextoPersonal") {
    apiCall = updateContextoPersonal;
  }
  if (type === "updateContextoFamiliar") {
    apiCall = updateContextoFamiliar;
  }
  if (type === "updateContextoEscolar") {
    apiCall = updateContextoEscolar;
  }
  if (type === "updateContextoMedico") {
    apiCall = updateContextoMedico;
  }
  if (type === "createAccount") {
    apiCall = createAccount;
  }
  if (type === "removeAccount") {
    apiCall = removeAccount;
  }
  if (type === "updateNotas") {
    apiCall = updateNotas;
  }

  return fetch(apiCall, { method: "POST", body: formData })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};
