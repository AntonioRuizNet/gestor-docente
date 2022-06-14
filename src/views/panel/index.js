import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Sections
import { Sidebar } from "./sidebar";
import Escritorio from "./sections/escritorio";
import Contactos from "./sections/contactos";
import Configuraciones from "./sections/configuraciones";
import Perfil from "./sections/perfil";
//Helpers
import { clearLocalStorage } from "./../../helpers/localStorage";
//Actions
import allActions from "../../actions";
//Styles
import { Root, BackgroundBody } from "./styles";

export default function Panel() {
  const dispatch = useDispatch();

  //Sections activation
  const [viewEscritorio, setViewEscritorio] = useState(true);
  const [viewContactos, setViewContactos] = useState(false);
  const [viewConfiguraciones, setViewConfiguraciones] = useState(false);
  const [viewPerfil, setViewPerfil] = useState(false);
  const [viewSalir, setViewSalir] = useState(false);

  const hideViews = () => {
    setViewEscritorio(false);
    setViewContactos(false);
    setViewSalir(false);
    setViewConfiguraciones(false);
    setViewPerfil(false);
  };

  const salir = () => {
    dispatch(allActions.globalActions.setLogged(false));
    clearLocalStorage();
  };

  const selectionMenu = (option) => {
    hideViews();
    switch (option) {
      case "Escritorio":
        setViewEscritorio(true);
        break;
      case "Alumnos":
        setViewContactos(true);
        break;
      case "Configuraciones":
        setViewConfiguraciones(true);
        break;
      case "Perfil":
        setViewPerfil(true);
        break;
      case "Salir":
        salir();
        break;
      default:
        break;
    }
  };

  return (
    <Root>
      <Sidebar selectionMenu={selectionMenu} />
      <BackgroundBody>
        {viewEscritorio && <Escritorio />}
        {viewContactos && <Contactos />}
        {viewConfiguraciones && <Configuraciones />}
        {viewPerfil && <Perfil />}
      </BackgroundBody>
    </Root>
  );
}
