import { idUser, getPeriodos, sendMensaje, getMensajes, insertVisita, getAdminData } from "./../../constants";

export const get_Periodos = () => {
  let formData = new FormData();

  return fetch(getPeriodos, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
};

export const send_Mensaje = (mensaje, tipo) => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  formData.append("mensaje", mensaje);
  formData.append("tipo", tipo);

  return fetch(sendMensaje, { method: "POST", body: formData })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const get_Mensajes = () => {
  let formData = new FormData();
  formData.append("idUser", idUser());
  return fetch(getMensajes, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
};

export const insert_Visita = (referencia) => {
  let formData = new FormData();
  formData.append("referencia", referencia);

  return fetch(insertVisita, { method: "POST", body: formData })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const get_AdminData = () => {
  let formData = new FormData();
  formData.append("auth", "iug&%ftRfr#@s=w!");
  return fetch(getAdminData, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((json) => {
      return json.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
};
