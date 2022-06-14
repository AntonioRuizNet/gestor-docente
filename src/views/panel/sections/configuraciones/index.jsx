import React, {useState, useEffect} from 'react'
import { useSelector } from "react-redux";

import { Button } from '../../../../components/button';
import {get_Configuraciones, update_Configurador, update_Evaluaciones} from './../../../../api/requests/configuraciones'
import {Input} from './../../../../components/input'
import {TabsPanels} from './../../../../components/tabsPanels'
import {AiOutlineSave, AiFillDelete} from 'react-icons/ai'

export default function Configuraciones() {

  const periodo = useSelector((state) => state.globalReducer.periodo);
  const [dataBuilded, setDataBuilded] = useState(false);

  const [asignaturas, setAsignaturas] = useState([]);
  const [cursos, setCursos] = useState([]);

  const [evaluaciones, setEvaluaciones] = useState([]);
  const [examenes, setExamenes] = useState([]);
  
  const getData = async () => {
    if(!dataBuilded){
      const data = await get_Configuraciones(periodo);
      if(data){
        setAsignaturas(data.asignaturas)
        setCursos(data.cursos)
        setEvaluaciones(data.evaluaciones.filter(e => e.tipo==="trimestral"))
        setExamenes(data.evaluaciones.filter(e => e.tipo==="examen"))
      }
    }
    setDataBuilded(true)
  }

  const updateConfigurador = (id, table, operation, value, tipo) => {
    if(tipo==="null"){
      update_Configurador(id, table, operation, value, periodo)
    }else{
      update_Evaluaciones(id, table, operation, value, periodo, tipo)
    }
    setDataBuilded(false);
  }

  const getValueById = (id) => {
    return document.getElementById(id).value;
  }

  const Configurador = ({title, data, table, tipo}) => {
    return (
      <>
        <div className="row">
            {data.length===0 ? 'Aún no hay datos' : ''}
            {data.map(e=>{
              return (<>
                  <div className="col-8" style={{paddingTop: '15px'}}>
                    <Input setValue={()=>null} type={'text'} idInput={'new_'+e.id} className={'customInput'} value={e.nombre}/>
                  </div>
                  <div className="col-4" style={{textAlign: 'end', paddingTop: '15px'}}>
                    <Button text={<AiOutlineSave/>} onClick={() => updateConfigurador(e.id, table, 'update', getValueById('new_'+e.id)) } className={''} />
                    <Button text={<AiFillDelete/>} onClick={() => updateConfigurador(e.id, table, 'disable', '')} className={'btn-danger'} />
                  </div>
                </>
              )
            })}
        </div>
        <div className="row" style={{marginTop: '40px'}}>
        <div className="col-12">Nueva opción<hr/></div>
          <div className="col-8">
            <Input placeholder={'Nueva opción'} setValue={()=>null} type={'text'} idInput={'new_'+title} className={''}/>
          </div>
          <div className="col-4" style={{textAlign: 'end'}}>&nbsp;<br/>
            <Button text={'Guardar'} onClick={() => updateConfigurador('', table, 'insert', getValueById('new_'+title), tipo)} className={''} />
          </div>
        </div>
      </>
    )
  }

  useEffect( () =>{
    if(!dataBuilded) getData();
  }, [dataBuilded]);

  useEffect( () =>{
    setDataBuilded(false);
  }, [periodo]);

  return (
    <>
      {
        <TabsPanels titles={['Asignaturas', 'Cursos', 'Evaluaciones', 'Examenes']} 
                    contents={[
                      <Configurador title={'Asignaturas'} data={asignaturas} table={'asignaturas'}tipo={'null'}/>,
                      <Configurador title={'Cursos'} data={cursos} table={'cursos'}tipo={'null'}/>,
                      <Configurador title={'Evaluaciones'} data={evaluaciones} table={'evaluaciones'} tipo={'trimestral'}/>,
                      <Configurador title={'Examenes'} data={examenes} table={'evaluaciones'} tipo={'examen'}/>
                    ]}
          />
        }
    </>
  )
}
