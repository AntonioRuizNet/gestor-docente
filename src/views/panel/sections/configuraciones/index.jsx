import React, {useState, useEffect} from 'react'
import { Button } from '../../../../components/button';
import {get_Configuraciones, update_Configurador} from './../../../../api/requests/configuraciones'
import {Input} from './../../../../components/input'
import {Select} from './../../../../components/select'
import {AiOutlineSave, AiFillDelete} from 'react-icons/ai'

export default function Configuraciones() {

  /*
  Readme, para mas configuraciones:
    - Crear tabla en BD (manteniendo columnas de las otras)
    - Actualizar en BACK API GET_CONFIGURACIONES la select de la nueva tabla
    - Agregar <Configurador /> en el render
    - Añadir set en getData() + useState
  */

  const [dataBuilded, setDataBuilded] = useState(false);

  const [asignaturas, setAsignaturas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [evaluaciones, setEvaluaciones] = useState([]);
  const [periodos, setPeriodos] = useState([]);
  
  const getData = async () => {
    if(!dataBuilded){
      const data = await get_Configuraciones();
      if(data){
        setAsignaturas(data.asignaturas)
        setCursos(data.cursos)
        setEvaluaciones(data.evaluaciones)
        setPeriodos(data.periodos)
      }
    }
    setDataBuilded(true)
  }

  const updateConfigurador = (id, table, operation, value, periodo) => {
    update_Configurador(
      id, table, operation, value, periodo
    )
    setDataBuilded(false);
  }

  const getValueById = (id) => {
    return document.getElementById(id).value;
  }

  const Configurador = ({title, data, table}) => {
    return (
      <div className="" style={{border: '1px lightgray solid', borderRadius: '3px', padding: '15px', backgroundColor: 'whitesmoke'}}>
        <b>{title}</b><hr/>
        <div className="row" style={{backgroundColor: 'white', margin: '0px 0px 15px 0px', padding: '10px', border: '1px #e6e6e6 solid'}}>
          
            {data.length===0 ? 'Aún no hay datos' : ''}
            {data.map(e=>{
              return (<>
                  <div className="col-4">
                    <Input setValue={()=>null} type={'text'} idInput={'new_'+e.id} className={'customInput'} value={e.nombre}/>
                  </div>
                  <div className="col-3">
                    <Select placeholder={'Periodo'} setValue={()=>null} idInput={'periodo_'+e.id} className={''} values={periodos} selected={e.periodo}/>
                  </div>
                  <div className="col-5" style={{textAlign: 'end'}}>
                    <Button text={<AiOutlineSave/>} onClick={() => updateConfigurador(e.id, table, 'update', getValueById('new_'+e.id), getValueById('periodo_'+e.id)) } className={''} />
                    <Button text={<AiFillDelete/>} onClick={() => updateConfigurador(e.id, table, 'disable', '')} className={'btn-danger'} />
                  </div>
                </>
              )
            })}

        </div>
        <div className="row">
          <div className="col-3">
            <Input placeholder={'Nueva opción'} setValue={()=>null} type={'text'} idInput={'new_'+title} className={''}/>
          </div>
          <div className="col-3">
            <Select placeholder={'Periodo'} setValue={()=>null} idInput={'periodo_'+title} className={''} values={periodos}/>
          </div>
          <div className="col-3">&nbsp;<br/>
            <Button text={'Guardar'} onClick={() => updateConfigurador('', table, 'insert', getValueById('new_'+title), getValueById('periodo_'+title))} className={''} />
          </div>
        </div>
      </div>
    )
  }

  useEffect( () =>{
    if(!dataBuilded) getData();
  }, [dataBuilded]);

  return (
    <div className="row">
      <div className="col-6 mb-4">
        <Configurador title={'Asignaturas'} data={asignaturas} table={'asignaturas'}/>
      </div>
      <div className="col-6 mb-4">
        <Configurador title={'Cursos'} data={cursos} table={'cursos'}/>
      </div>
      <div className="col-6 mb-4">
        <Configurador title={'Evaluaciones'} data={evaluaciones} table={'evaluacion'}/>
      </div>
    </div>
  )
}
