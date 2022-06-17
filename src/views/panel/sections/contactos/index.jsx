import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";

//Components
import SubmenuSection from './../../../../components/submenuSection'
import Tabla from './../../../../components/tabla'
import {Buscador} from './../../../../components/buscador'
import Ficha from './ficha'
import Asistencias from './asistencias'
import Notas from './notas'

//Requests
import {get_Accounts} from './../../../../api/requests/contacts'

export default function Contactos() {

  const periodo = useSelector((state) => state.globalReducer.periodo);

  const [activeModalPanelAsistencias, setActiveModalPanelAsistencias] = useState(false);
  const [activeModalPanelNotas, setActiveModalPanelNotas] = useState(false);
  const [activeModalPanel, setActiveModalPanel] = useState(false);
  const [linea, setLinea] = useState({});
  const [idContacto, setIdContacto] = useState(null);

  const [data, setData] = useState([]);
  const [dataBuilded, setDataBuilded] = useState(false);
  //const [contactosContextoEscolar, setContactosContextoEscolar] = useState([]);
  const [contextoEscolar, setContextoEscolar] = useState([]);
  const [contextoFamiliar, setContextoFamiliar] = useState([]);
  const [contextoMedico, setContextoMedico] = useState([]);

  const [widths, setWidths] = useState([]);
  const [header, setHeader] = useState([]);
  const [lines, setLines] = useState([]);

  const getAccounts = async () => {
    if(!dataBuilded){
      const accounts = await get_Accounts(periodo);
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
    setActiveModalPanelNotas(false);
  }

  const OpenModal = (value) => {
      switch (value) {
          case "Nuevo":
            setActiveModalPanel(true);
            setLinea({});
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
    { id: 0, value: "Notas", className:"btn-info"  }, 
  ];

  const buildLinea = (id, type) => {
    console.log('buildLinea', id, type)
    console.log(data)
    if(type==="Ficha"){
      const selectedLineObj = data.accounts.filter(e => e.id===id);
      console.log(selectedLineObj)
      setLinea(selectedLineObj[0]);
      setActiveModalPanel(true);

      const selectedContextoEscolarObj = data.contactosContextoEscolar.filter(e => e.idContacto===id);
      setContextoEscolar(selectedContextoEscolarObj[0]);

      const selectedContextoFamiliarObj = data.contactosContextoFamiliar.filter(e => e.idContacto===id);
      setContextoFamiliar(selectedContextoFamiliarObj[0]);

      const selectedContextoMedicoObj = data.contactosContextoMedico.filter(e => e.idContacto===id);
      setContextoMedico(selectedContextoMedicoObj[0]);
      
    }

    if(type==="Asistencias"){
      const selectedLineObj = data.asistencias.filter(e => e.idContacto===id);
      const selectedLine = selectedLineObj.map( Object.values );
      setLinea(selectedLine);
      setIdContacto(id);
      setActiveModalPanelAsistencias(true);
    }

    if(type==="Notas"){
      const selectedNotasObj = data.notas.filter(e => e.idContacto===id);
      setLinea(selectedNotasObj);
      setIdContacto(id);
      setActiveModalPanelNotas(true);
    }
  }

  const buildTable = (data) => {
    const thisYear = new Date();

    const widths = [4, 20, 20, 11, 45];
    setWidths(widths);

    const header = ["#", "Nombre", "Apellidos", "Edad", " "];
    setHeader(header);

    const extractedLines = data.map( e => {return [e.id, e.nombre, e.apellidos, (thisYear.getFullYear()-(e.nacimiento).split("-")[0]), null]})
    console.log('extractedLines')
    console.log(extractedLines)
    setLines(extractedLines);
  }

  const searcher = (search) => {
    const thisYear = new Date();
    const allLinesFiltred = data.accounts.filter(e => e.nombre.indexOf(search) > -1 || e.apellidos.indexOf(search) > -1 || e.nacimiento.indexOf(search) > -1);
    const extractedLines = allLinesFiltred.map( e => {return [e.id, e.nombre, e.apellidos, (thisYear.getFullYear()-(e.nacimiento).split("-")[0]), null]})
    setLines(extractedLines);
  }
  

  useEffect( () =>{
    if(!dataBuilded) getAccounts();
  }, [dataBuilded]);

  useEffect( () =>{
    setDataBuilded(false);
  }, [periodo]);

  return (
    <>
    <SubmenuSection options={enlaces}/>
    <Buscador setSearch={searcher}/>
    {dataBuilded && <Tabla widths={widths} header={header} data={lines} buildLinea={buildLinea} optionsTable={optionsTable}/>}
    {activeModalPanel && <Ficha closePanel={toogleModalPanel} linea={linea} setDataBuilded={setDataBuilded} contextoEscolar={contextoEscolar} contextoFamiliar={contextoFamiliar} contextoMedico={contextoMedico} periodo={periodo} setActiveModalPanel={setActiveModalPanel} cursos={data.cursos}/>}
    {activeModalPanelAsistencias && <Asistencias closePanel={toogleModalPanel} linea={linea} setDataBuilded={setDataBuilded} idContacto={idContacto} periodo={periodo}/>}
    {activeModalPanelNotas && <Notas closePanel={toogleModalPanel} linea={linea} idContacto={idContacto} setDataBuildedGlobal={setDataBuilded} />}
    </>
    
  )
}
