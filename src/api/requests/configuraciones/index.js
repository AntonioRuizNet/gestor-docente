import { idUser, getConfiguraciones } from "./../../constants";

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
