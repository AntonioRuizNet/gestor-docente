import React, {useState, useEffect} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import { Calendario } from "./../../../../components/calendar";
import ModalPanel from './../../../../components/modalPanel'
import {update_Account} from './../../../../api/requests/contacts'

const Asistencias = ({closePanel, linea, setDataBuilded}) => {
    /*
    	id, idUser, idContacto, fecha, valor
    */
    console.log(linea);

    const [dataReady, setDataReady] = useState(false);
    //const [dataLoaded, setLoaded] = useState(false);

    const [id, setId] = useState("");
    const [fecha, setFecha] = useState("");
    const [valor, setValor] = useState("");

    /*const checkData = () => {
        const lineaFormated = linea[0];
        if(lineaFormated && lineaFormated.length>0 && !dataLoaded){
          setId(lineaFormated[0])
          setFecha(lineaFormated[3]);
          setValor(lineaFormated[4]);
          setLoaded(true);
        }
    }
    checkData();*/

    const updateDate = (id, fecha, valor) =>{
      setId(id);
      setFecha(fecha);
      setValor(valor);
      setDataReady(true);
    }

    useEffect( () =>{
        if(dataReady){
          console.log('Actualizando calendario...');
          setDataReady(false);
          /*update_Account(
            id,
            fecha,
            valor,
          )*/
          closePanel();
          setDataBuilded(false);
        }
    }, [dataReady]);

    return (
        <ModalPanel info={
            <>
            <h4>Asistencias</h4>
            <hr />
            <div className="row">

                <div className="col-md-12 col-sm-12">
                    <Calendario data={linea} onClick={updateDate} />
                </div>
    
            </div>
            </>} closePanel={closePanel}
        />
      );
}

export default Asistencias;