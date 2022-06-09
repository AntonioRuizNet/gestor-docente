import { idUser, getConfiguraciones, updateConfigurador } from "./../../constants";

export const get_Configuraciones = () => {
  let formData = new FormData();
  formData.append("idUser", idUser());

  return fetch(getConfiguraciones, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
};

export const update_Configurador = (id, table, operation, value, periodo) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("id", id);
  formData.append("table", table);
  formData.append("operation", operation);
  formData.append("value", value);
  formData.append("periodo", periodo);

  return fetch(updateConfigurador, { method: "POST", body: formData })
    .then((response) => get_Configuraciones())
    .catch((error) => {
      console.error(error);
    });
};
