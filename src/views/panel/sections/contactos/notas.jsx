import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";

import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import ModalPanel from '../../../../components/modalPanel'
import {TabsPanels} from './../../../../components/tabsPanels'

import {updateData} from '../../../../api/requests/contacts'

import {get_Configuraciones} from '../../../../api/requests/configuraciones'

const Notas = ({closePanel, linea, idContacto, setDataBuildedGlobal}) => {

    const periodo = useSelector((state) => state.globalReducer.periodo);

    const [dataBuilded, setDataBuilded] = useState(false);
    const [evaluacionesBuilded, setEvaluacionesBuilded] = useState([]);
    const [examenesBuilded, setExamenesBuilded] = useState([]);
  
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
          generateEvaluaciones(data.asignaturas, data.evaluaciones);
        }
      }
      setDataBuilded(true);
    }

    const generateEvaluaciones = (asignaturas, evaluaciones) => {
      console.log('generateEvaluaciones...');
      let buildedEvaluacion = [];
      let buildedExamen = [];
      asignaturas.map( a =>{
        evaluaciones.map( e => {
          if(e.tipo==="trimestral"){
            buildedEvaluacion.push({id: null, idContacto: idContacto, evaluacion: e.id, materia: a.id, observaciones: "", periodo: periodo, tipo: e.tipo, valor: ""});
          }
          if(e.tipo==="examen"){
            buildedExamen.push({id: null, idContacto: idContacto, evaluacion: e.id, materia: a.id, observaciones: "", periodo: periodo, tipo: e.tipo, valor: ""});
          }
        })
      })

      buildedEvaluacion.map( be => {
        linea.map( l => {
          if(be.materia === l.materia && be.evaluacion === l.evaluacion){
            be.id = l.id;
            be.valor = l.valor;
          }
        });
      });
      setEvaluacionesBuilded(buildedEvaluacion);
      console.log(buildedEvaluacion);

      buildedExamen.map( be => {
        linea.map( l => {
          if(be.materia === l.materia && be.evaluacion === l.evaluacion){
            be.id = l.id;
            be.valor = l.valor;
          }
        });
      });
      setExamenesBuilded(buildedExamen);
      console.log(buildedExamen);

      
    }

    const updateEvaluaciones = (valor, id, type) => {
        if(id.includes("_new")){
          let idArr = id.split("_");
          evaluacionesBuilded.map( l => {
            if(l.materia === idArr[3] && l.evaluacion===idArr[2]){
              l.valor = valor;
            }
          });
          examenesBuilded.map( l => {
            if(l.materia === idArr[3] && l.evaluacion===idArr[2]){
              l.valor = valor;
            }
          });
        }else{
          evaluacionesBuilded.map( e => {
            if(e.id===id){e.valor=valor;}
          });
          examenesBuilded.map( e => {
            if(e.id===id){e.valor=valor;}
          });
        }
        console.log(evaluacionesBuilded);  
        console.log(examenesBuilded);  
    };

    const sendData = (type) => {
      console.log('sendData')
      if(type==="trimestral") updateData('updateNotas', evaluacionesBuilded)
      if(type==="examen") updateData('updateNotas', examenesBuilded)
      setDataBuildedGlobal(false);
    }

    const EvaluacionesBlock = ({builded, tipo}) => {
      return (
          <>
            <div className="row">
              <div className="col"> &nbsp; </div>
              {evaluaciones.map( e =>{
                if(e.tipo===tipo){
                    return (<div className="col text-center">
                                {e.nombre}
                            </div>
                    )
                }
              })}
            </div>
            {asignaturas.map( a =>{
              return (<div className="row">
                  <div className="col">{a.nombre}</div>
                    {builded.length>0 && evaluaciones.map( e =>{
                      if(e.tipo===tipo){
                        let valor = ''; let id = '';
                        let resultado = builded.filter( f => f.materia === a.id && f.evaluacion===e.id);
                        if(resultado[0]?.id===null){ valor=''; id='_new_'+e.id+'_'+a.id; }else{ valor=resultado[0].valor; id=resultado[0].id; }
                        return (<div className="col">
                                <Input placeholder={""} setValue={updateEvaluaciones} type={"text"} idInput={id} className={"text-center"} value={valor} />
                            </div>
                        )
                      }
                    })}
              </div>)
            })}
            <div className="row">
              <div className="col-md-12" style={{textAlign: 'right'}}>
                <Button text={'Actualizar'} className={'btn-primary'} onClick={() => sendData(tipo)}/>
              </div>
            </div>
          </>
      );
    }

    useEffect( () =>{
      if(!dataBuilded) getData();
    }, [dataBuilded]);
  
    useEffect( () =>{
      setDataBuilded(false);
    }, [periodo]);
  
  
    return (
        <ModalPanel info={
          <TabsPanels titles={['Exámenes', 'Evaluaciones']} 
                    contents={[
                      <EvaluacionesBlock builded={examenesBuilded} tipo={"examen"}/>,
                      <EvaluacionesBlock builded={evaluacionesBuilded} tipo={"trimestral"}/>
                    ]}
          />
            } closePanel={closePanel}
        />
      );
}

export default Notas;