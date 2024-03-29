import { idUser, getPerfil, updateProfile } from "./../../constants";

/*export const get_Perfil = () => {
  let formData = new FormData();
  formData.append("idUser", idUser());

  return fetch(getPerfil, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
};*/

export const update_Perfil = (objectData) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("json", JSON.stringify(objectData));

  return fetch(updateProfile, { method: "POST", body: formData })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};
