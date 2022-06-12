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
    const [lineaBuilded, setLineaBuilded] = useState([]);
  
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
      setDataBuilded(true);
    }

    const generateLinea = (asignaturas, evaluaciones) => {
      let builded = [];
      asignaturas.map( a =>{
        evaluaciones.map( e =>{
          builded.push({id: null, idContacto: idContacto, evaluacion: e.id, materia: a.id, observaciones: "", periodo: periodo, tipo: "", valor: ""});
        })
      })
      builded.map( ml => {
        linea.map( l => {
          if(ml.materia === l.materia && ml.evaluacion === l.evaluacion){
            ml.id = l.id;
            ml.valor = l.valor;
          }
        });
        
      });

      setLineaBuilded(builded);
      console.log(lineaBuilded);
    }

    const updateEvaluaciones = (valor, id) => {
      if(id.includes("_new")){
        let idArr = id.split("_");
        lineaBuilded.map( l => {
          if(l.materia === idArr[3] && l.evaluacion===idArr[2]){
            
            l.valor = valor;
          }
        });
      }else{
        lineaBuilded.map( e => {
          if(e.id===id){e.valor=valor;}
        });
      }
      console.log(lineaBuilded);      
    };

    const sendData = (type) => {
      //Crear tab y agregar examenes, pruebas... a parte de evaluaciones
      //Modificar nombre del componente a notas.jsx
      
      //if(type==="updateEvaluaciones") updateData(type, lineaBuilded);
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
                    {lineaBuilded.length>0 && evaluaciones.map( e =>{
                      let valor = ''; let id = '';
                      let resultado = lineaBuilded.filter( f => f.materia === a.id && f.evaluacion===e.id);
                      if(resultado[0]?.id===null){ valor=''; id='_new_'+e.id+'_'+a.id; }else{ valor=resultado[0].valor; id=resultado[0].id; }
                      return (<div className="col">
                              <Input placeholder={""} setValue={updateEvaluaciones} type={"text"} idInput={id} className={""} value={valor} />
                          </div>
                      )
                    })}
              </div>)
            })}
            <div className="row">
              <div className="col-md-12" style={{textAlign: 'right'}}>
                <Button text={'Actualizar evaluaciones'} className={'btn-primary'} onClick={() => sendData('updateEvaluaciones')}/>
              </div>
            </div>
            </>} closePanel={closePanel}
        />
      );
}

export default Evaluaciones;