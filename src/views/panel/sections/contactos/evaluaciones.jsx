import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";

import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import ModalPanel from './../../../../components/modalPanel'
import {update_Account} from './../../../../api/requests/contacts'

import {get_Configuraciones, update_Configurador} from './../../../../api/requests/configuraciones'

const Evaluaciones = ({closePanel, linea}) => {
    /*
    	id, idUser, idContacto, evaluacion, materia, tipo(unidad/parcial), observaciones, valor
    */
    console.log(linea);

    const periodo = useSelector((state) => state.globalReducer.periodo);

    const [dataBuilded, setDataBuilded] = useState(false);
  
    const [asignaturas, setAsignaturas] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [evaluaciones, setEvaluaciones] = useState([]);
    
    const getData = async () => {
      if(!dataBuilded){
        const data = await get_Configuraciones(periodo);
        if(data){
          setAsignaturas(data.asignaturas)
          setCursos(data.cursos)
          setEvaluaciones(data.evaluaciones)
        }
      }
      setDataBuilded(true)
    }

    useEffect( () =>{
      if(!dataBuilded) getData();
    }, [dataBuilded]);
  
    useEffect( () =>{
      setDataBuilded(false);
    }, [periodo]);
  
    


    return (
        <ModalPanel info={
            <>
            <h4>Evaluaciones</h4>
            <hr />
            <div className="row">
              <div className="col"> &nbsp; </div>
              {evaluaciones.map( e =>{
                        return (<div className="col">
                                {e.nombre}
                            </div>
                        )
              })}
            </div>
            {asignaturas.map( a =>{
              return (<div className="row">
                  <div className="col"> {a.nombre} </div>
                    {evaluaciones.map( e =>{
                      return (<div className="col">
                              <Input placeholder={""} setValue={() => null} type={"text"} idInput={""} className={""} value={""} />
                          </div>
                      )
                    })}
              </div>)
            })}
            </>} closePanel={closePanel}
        />
      );
}

export default Evaluaciones;