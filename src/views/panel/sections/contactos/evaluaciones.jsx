import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";

import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import ModalPanel from './../../../../components/modalPanel'
import {update_Account} from './../../../../api/requests/contacts'

import {get_Configuraciones, update_Configurador} from './../../../../api/requests/configuraciones'

const Evaluaciones = ({closePanel, linea, idContacto}) => {
    /*
    	id, idUser, idContacto, evaluacion, materia, tipo(unidad/parcial), observaciones, valor
    */
    

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
          generateLinea(data.asignaturas, data.evaluaciones);
        }
      }
      setDataBuilded(true)
    }

    const generateLinea = (asignaturas, evaluaciones) => {
      let myLinea = [];
      asignaturas.map( a =>{
        evaluaciones.map( e =>{
          myLinea.push({id: null, idContacto: idContacto, evaluacion: e.id, materia: a.id, observaciones: "", periodo: periodo, tipo: "", valor: ""});
        })
      })
      myLinea.map( ml => {
        linea.map( l => {
          if(ml.materia === l.materia && ml.evaluacion === l.evaluacion){
            ml.id = l.id;
            ml.valor = l.valor;
          }
        });
        
      });

      linea = myLinea;
      console.log(linea);
    }

    const updateEvaluaciones = (valor, id) => {
      //Si ID contiene _new busco por _new_idEvaluacion_idMateria y comparo en if para encontrar el objeto.
      console.log(valor, id);
      linea.map( e => {
        if(e.id===id){e.valor=valor;}
      });
      console.log(linea);      
    };

    const sendData = (type) => {
      //if(type==="updateEvaluaciones") updateData(type, linea);
      //setDataBuilded(false);
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
                  <div className="col">{a.nombre}</div>
                    {evaluaciones.map( e =>{
                      let valor = ''; let id = '';
                      let resultado = linea.filter( f => f.materia === a.id && f.evaluacion===e.id);
                      if(resultado[0]?.valor===undefined){ valor=''; id=''; }else{ valor=resultado[0].valor; id=resultado[0].id; }
                      return (<div className="col">
                              <Input placeholder={""} setValue={updateEvaluaciones} type={"text"} idInput={id} className={""} value={valor} />
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