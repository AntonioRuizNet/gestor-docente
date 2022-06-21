import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Sections
import { Sidebar } from "./sidebar";
import Escritorio from "./sections/escritorio";
import Contactos from "./sections/contactos";
import Configuraciones from "./sections/configuraciones";
import Perfil from "./sections/perfil";
import { Ayuda } from "./sections/ayuda";
//Helpers
import { clearLocalStorage } from "./../../helpers/localStorage";
//Actions
import allActions from "../../actions";
//Styles
import { Root, BackgroundBody } from "./styles";
//Requests
import { get_Accounts } from "./../../api/requests/contacts";

export default function Panel() {
  const dispatch = useDispatch();
  const [dataAccounts, setDataAccounts] = useState([]);
  const [dataBuilded, setDataBuilded] = useState(false);
  const periodo = useSelector((state) => state.globalReducer.periodo);
  const mock = useSelector((state) => state.globalReducer.profile.mock);

  //Sections activation
  const [viewEscritorio, setViewEscritorio] = useState(true);
  const [viewContactos, setViewContactos] = useState(false);
  const [viewConfiguraciones, setViewConfiguraciones] = useState(false);
  const [viewPerfil, setViewPerfil] = useState(false);
  const [viewAyuda, setViewAyuda] = useState(false);
  const [viewSalir, setViewSalir] = useState(false);

  const hideViews = () => {
    setViewEscritorio(false);
    setViewContactos(false);
    setViewSalir(false);
    setViewConfiguraciones(false);
    setViewPerfil(false);
    setViewAyuda(false);
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
      case "Ayuda":
        setViewAyuda(true);
        break;
      case "Salir":
        salir();
        break;
      default:
        break;
    }
  };

  const getAccounts = async () => {
    if (!dataBuilded) {
      const accounts = await get_Accounts(periodo);
      if (accounts) {
        console.log(accounts);
        setDataAccounts(accounts);
      }
    }
    setDataBuilded(true);
  };

  useEffect(() => {
    if (!dataBuilded) getAccounts();
  }, [dataBuilded]);

  useEffect(() => {
    setDataBuilded(false);
  }, [periodo]);

  return (
    <Root>
      <Sidebar selectionMenu={selectionMenu} />
      <BackgroundBody>
        {viewEscritorio && <Escritorio accounts={dataAccounts} />}
        {viewContactos && <Contactos />}
        {viewConfiguraciones && <Configuraciones />}
        {viewPerfil && <Perfil />}
        {viewAyuda && <Ayuda />}
      </BackgroundBody>
      {mock === "true" ? (
        <div style={{ position: "fixed", backgroundColor: "#ffab11", color: "white", width: "100%", textAlign: "center", bottom: "0" }}>
          Estás en modo <b>demostración</b>, desactiva esta opción en <b>Perfil</b> para usar la aplicación correctamente.
        </div>
      ) : (
        ""
      )}
    </Root>
  );
}
