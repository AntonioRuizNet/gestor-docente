import React, {useEffect, useState} from 'react'

//Components
import SubmenuSection from './../../../../components/submenuSection'
import Tabla from './../../../../components/tabla'
import Ficha from './ficha'
import Asistencias from './asistencias'
import Evaluaciones from './evaluaciones'

//Requests
import {get_Accounts} from './../../../../api/requests/contacts'

export default function Contactos() {
  const [activeModalPanelAsistencias, setActiveModalPanelAsistencias] = useState(false);
  const [activeModalPanelEvaluaciones, setActiveModalPanelEvaluaciones] = useState(false);
  const [activeModalPanel, setActiveModalPanel] = useState(false);
  const [linea, setLinea] = useState({});

  const [data, setData] = useState([]);
  const [dataBuilded, setDataBuilded] = useState(false);

  const [widths, setWidths] = useState([]);
  const [header, setHeader] = useState([]);
  const [lines, setLines] = useState([]);

  const getAccounts = async () => {
    if(!dataBuilded){
      const accounts = await get_Accounts();
      if(accounts){
        console.log(accounts);
        setData(accounts)
        buildTable(accounts.accounts);
      }
    }
    setDataBuilded(true)
  }
  
  const toogleModalPanel = () => {
    setActiveModalPanel(false);
    setActiveModalPanelAsistencias(false);
    setActiveModalPanelEvaluaciones(false);
  }

  const OpenModal = (value) => {
      switch (value) {
          case "Nuevo":
            setActiveModalPanel(true);
            setLinea([]);
              break;
          default:
              break;
      }
  };

  const enlaces = [
    { id: 0, value: "Nuevo", event: OpenModal }, 
  ];

  const optionsTable = [
    { id: 0, value: "Ficha", className:"" }, 
    { id: 0, value: "Asistencias", className:"btn-primary"  }, 
    { id: 0, value: "Evaluaciones", className:"btn-info"  }, 
  ];

  const buildLinea = (id, type) => {
    if(type==="Ficha"){
      const selectedLineObj = data.accounts.filter(e => e.id===id);
      const selectedLine = selectedLineObj.map( Object.values );
      setLinea(selectedLine);
      setActiveModalPanel(true);
    }

    if(type==="Asistencias"){
      const selectedLineObj = data.asistencias.filter(e => e.id===id);
      const selectedLine = selectedLineObj.map( Object.values );
      setLinea(selectedLine);
      setActiveModalPanelAsistencias(true);
    }

    if(type==="Evaluaciones"){
      const selectedLineObj = data.evaluaciones.filter(e => e.id===id);
      const selectedLine = selectedLineObj.map( Object.values );
      setLinea(selectedLine);
      setActiveModalPanelEvaluaciones(true);
    }
  }

  const buildTable = (data) => {
    const widths = [4, 30, 45, 10, 11];
    setWidths(widths);

    const header = ["#", "Nombre", "Apellidos", "Nacimiento", ""];
    setHeader(header);

    const allLines = data.map( Object.values );
    const extractedLines = allLines.map( e => {return [e[0], e[2], e[3], e[4]]})
    setLines(extractedLines);
  }

  useEffect( () =>{
    if(!dataBuilded) getAccounts();
  }, [dataBuilded]);

  return (
    <>
    <SubmenuSection options={enlaces}/>
    {dataBuilded && <Tabla widths={widths} header={header} data={lines} buildLinea={buildLinea} optionsTable={optionsTable}/>}
    {activeModalPanel && <Ficha closePanel={toogleModalPanel} linea={linea} setDataBuilded={setDataBuilded}/>}
    {activeModalPanelAsistencias && <Asistencias closePanel={toogleModalPanel} linea={linea} setDataBuilded={setDataBuilded}/>}
    {activeModalPanelEvaluaciones && <Evaluaciones closePanel={toogleModalPanel} linea={linea} setDataBuilded={setDataBuilded}/>}
    </>
    
  )
}
