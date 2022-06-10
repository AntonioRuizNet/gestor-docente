import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaDesktop, FaSignOutAlt, FaCog, FaUserFriends } from "react-icons/fa";
import { BackgroundSidebar, TitleSidebar, Separador, OptionMenuV2 } from "./styles";
import { Select } from "./../../components/select";

//Requests
import { get_Periodos } from "./../../api/requests/globals";

//Actions
import allActions from "../../actions";

export const Sidebar = ({ selectionMenu }) => {
  const [dataBuilded, setDataBuilded] = useState(false);
  const [periodos, setPeriodos] = useState([]);

  const dispatch = useDispatch();
  const periodo = useSelector((state) => state.globalReducer.periodo);

  const getPeriodos = async () => {
    if (!dataBuilded) {
      const periodosValues = await get_Periodos();
      if (periodosValues) {
        setPeriodos(periodosValues.periodos);

        if (periodo == "") {
          const currentDate = new Date();
          const currentAndNext = currentDate.getFullYear() + "-" + (currentDate.getFullYear() + 1);
          let selected = periodosValues.periodos.filter((option) => {
            return option.nombre === currentAndNext;
          })[0]?.id;
          dispatch(allActions.globalActions.setPeriodo(selected));
        }
      }
    }
    setDataBuilded(true);
  };

  const updatePeriodo = (periodo) => {
    dispatch(allActions.globalActions.setPeriodo(periodo));
  };

  useEffect(() => {
    if (!dataBuilded) getPeriodos();
  }, [dataBuilded]);

  return (
    <BackgroundSidebar>
      <TitleSidebar>Gestor Docente</TitleSidebar>
      <div style={{ textAlign: "center", color: "white", paddingBottom: "15px" }}>
        <Select placeholder={"Periodo"} setValue={updatePeriodo} idInput={"periodo"} className={"text-center"} values={periodos} selected={periodo} />
      </div>
      <Separador />
      <OptionMenuV2 className="menuResp" onClick={() => selectionMenu("Escritorio")}>
        <FaDesktop className="icoResp" />
        <span>Escritorio</span>
      </OptionMenuV2>
      <OptionMenuV2 className="menuResp" onClick={() => selectionMenu("Alumnos")}>
        <FaUserFriends className="icoResp" />
        <span>Alumnos</span>
      </OptionMenuV2>
      <OptionMenuV2 className="menuResp" onClick={() => selectionMenu("Configuraciones")}>
        <FaCog className="icoResp" />
        <span>Configuraciones</span>
      </OptionMenuV2>
      <OptionMenuV2 className="menuResp" onClick={() => selectionMenu("Salir")}>
        <FaSignOutAlt className="icoResp" /> <span>Salir</span>
      </OptionMenuV2>
    </BackgroundSidebar>
  );
};
