import { idUser, getAccounts, updateAccount, removeAccount } from "./../../constants";

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

export const update_Account = (id, apellidos, nombre, nacimiento, enfermedades, domicilio) => {
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
