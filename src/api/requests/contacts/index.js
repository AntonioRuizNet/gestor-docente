import { idUser, getAccounts, removeAccount, createAccount, updateAsistencias, updateContextoEscolar, updateContextoFamiliar, updateContextoPersonal, updateContextoMedico } from "./../../constants";

export const get_Accounts = (data) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("data", data);

  return fetch(getAccounts, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
};

/*export const update_Account = (id, apellidos, nombre, nacimiento, enfermedades, domicilio) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("id", id);
  formData.append("apellidos", apellidos);
  formData.append("nombre", nombre);
  formData.append("nacimiento", nacimiento);
  formData.append("enfermedades", enfermedades);
  formData.append("domicilio", domicilio);

  return fetch(updateAccount, { method: "POST", body: formData })
    .then((response) => {
      return response.ok;
    })
    .catch((error) => {
      console.error(error);
    });
};*/

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

export const update_Asistencias = (idContacto, fecha, valor, obs) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("idContacto", idContacto);
  formData.append("fecha", fecha);
  formData.append("valor", valor);
  formData.append("obs", obs);

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

  return fetch(apiCall, { method: "POST", body: formData })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};
