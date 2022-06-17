import React, {useState, useEffect} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import { Calendario } from "./../../../../components/calendar";
import ModalPanel from './../../../../components/modalPanel'
import { FloatMessage } from '../../../../components/floatMessage';

import {update_Asistencias} from './../../../../api/requests/contacts'

const Asistencias = ({closePanel, linea, idContacto, setDataBuilded, periodo, mock}) => {

  const [messageActive, setMessageActive] = useState({text: "Texto", state: 0, active: false});
    const updateDate = (idContacto, fecha, valor, obs) =>{

      //Send floatMessage
      setMessageActive({text: "Cambios guardados", state: 1, activate: true});
      setTimeout(function() { 
          setMessageActive({text: "", state: 0, activate: false}); 
      }, 4000);
      
      console.log('update_Asistencias');
      if(mock!=="true")
      update_Asistencias(
        idContacto,
        fecha,
        valor,
        obs,
        periodo,
      )
      setDataBuilded(false);
      closePanel();
    }

    return (
      <>
        <ModalPanel info={
            <>
            <h4>Asistencias {(2018+parseInt(periodo))}</h4>
            <hr />
            <div className="row">

                <div className="col-md-12 col-sm-12">
                    <Calendario data={linea} updateDate={updateDate} idContacto={idContacto} periodo={periodo}/>
                </div>
    
            </div>
            </>} closePanel={closePanel}
        />
        {messageActive.activate && <FloatMessage text={messageActive.text} state={messageActive.state}/>}
        </>
      );
}

export default Asistencias;