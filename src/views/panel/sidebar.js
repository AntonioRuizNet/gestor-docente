import { Logo } from "../../components/logo";
import { FaDesktop, FaSignOutAlt, FaCog, FaBoxes, FaUserFriends } from "react-icons/fa";
import { BackgroundSidebar, TitleSidebar, Separador, OptionMenu, OptionMenuV2 } from "./styles";

export const Sidebar = ({ selectionMenu }) => {
  return (
    <BackgroundSidebar>
      <TitleSidebar>Gestor Docente</TitleSidebar>

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
