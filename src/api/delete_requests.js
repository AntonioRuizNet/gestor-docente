import { getProfile, setProfile, getAccounts, updateAccount, removeAccount, checkEmail } from "./constants";

//Helpers
import { getLocalStorage } from "../helpers/localStorage";

const idUser = () => {
  const id = getLocalStorage("token").substring(6, 4);
  return id;
};

export const get_Profile = (email, password) => {
  console.log("Sending ", email, password);
  let formData = new FormData();
  formData.append("id", idUser());
  formData.append("email", email);
  formData.append("password", password);

  return fetch(getProfile, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const set_Profile = (user, password, email) => {
  let formData = new FormData();
  formData.append("id", idUser());
  formData.append("user", user);
  formData.append("clave", password);
  formData.append("email", email);

  return fetch(setProfile, { method: "POST", body: formData })
    .then((response) => {
      return response.ok;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const check_Email = (email) => {
  let formData = new FormData();
  formData.append("email", email);

  return fetch(checkEmail, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const get_Accounts = (data) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("data", data);

  return fetch(getAccounts, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json.results;
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
