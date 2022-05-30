import { idUser, getProfile, setProfile, checkEmail } from "./../../constants";

export const get_Profile = (email, password) => {
  console.log("Sending ", email, password);
  let formData = new FormData();
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
