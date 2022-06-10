import React, {useState, useEffect} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import { Calendario } from "./../../../../components/calendar";
import ModalPanel from './../../../../components/modalPanel'
import {update_Asistencias} from './../../../../api/requests/contacts'

const Asistencias = ({closePanel, linea, idContacto, setDataBuilded, periodo}) => {
    console.log(linea);
    const updateDate = (idContacto, fecha, valor, obs) =>{
      console.log('update_Asistencias');
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
        <ModalPanel info={
            <>
            <h4>Asistencias</h4>
            <hr />
            <div className="row">

                <div className="col-md-12 col-sm-12">
                    <Calendario data={linea} updateDate={updateDate} idContacto={idContacto} />
                </div>
    
            </div>
            </>} closePanel={closePanel}
        />
      );
}

export default Asistencias;