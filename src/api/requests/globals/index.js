import { getPeriodos } from "./../../constants";

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
