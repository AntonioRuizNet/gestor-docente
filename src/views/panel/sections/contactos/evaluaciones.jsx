import React, {useState, useEffect} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import ModalPanel from './../../../../components/modalPanel'
import {update_Account} from './../../../../api/requests/contacts'

const Evaluaciones = ({closePanel, linea, setDataBuilded}) => {
    /*
    	id, idUser, idContacto, evaluacion, materia, tipo(unidad/parcial), observaciones, valor
    */
    console.log(linea);

    const [dataReady, setDataReady] = useState(false);
    const [dataLoaded, setLoaded] = useState(false);
    
    const [id, setId] = useState("");
    const [evaluacion, setEvaluacion] = useState("");

    const checkData = () => {
        const lineaFormated = linea[0];
        if(lineaFormated && lineaFormated.length>0 && !dataLoaded){
          setId(lineaFormated[0])
          setEvaluacion(lineaFormated[3]);
          setLoaded(true);
        }
    }
    checkData();
    
    useEffect( () =>{
            if(dataReady){
              setDataReady(false);
              /*update_Account(
                id,
                evaluacion,
              )*/
              closePanel();
              setDataBuilded(false);
            }
    }, [dataReady]);

    return (
        <ModalPanel info={
            <>
            <h4>Evaluaciones</h4>
            <hr />
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <Input placeholder={"Evaluacion"} setValue={setEvaluacion} type={"text"} idInput={"evaluacion"} className={""} value={evaluacion} />
                </div>
    
                <div className="col-md-12 col-sm-12 text-center mt-3">
                    <Button text={"Actualizar"} onClick={() => setDataReady(true)} />
                </div>
            </div>
            </>} closePanel={closePanel}
        />
      );
}

export default Evaluaciones;