import React, {useState} from 'react';
import { FaFlagCheckered, FaFlag, FaRegCheckCircle } from "react-icons/fa";
import { Button } from '../../../../components/button';
import { Textarea } from '../../../../components/textarea';
import {RenderBarChart} from '../../../../components/renderBarChart';


export default function Escritorio() {
  let data = [];


  const [sugerenciaEnviada, setSugerenciaEnviada] = useState(false);
  const roadMapDone = <FaFlagCheckered style={{color: '#4e73df'}}/>;
  const roadMapPending = <FaFlag style={{color: '#e1d300'}}/>;
  const roadMap = [
    {name:'Ficha del alumno', icon: roadMapDone}, 
    {name:'Gestión de asistencias', icon: roadMapDone}, 
    {name:'Gestión de notas', icon: roadMapDone},
    {name:'Configuración de asignaturas y cursos', icon: roadMapDone},
    {name:'Configuración de evaluaciones y exámenes', icon: roadMapDone},
    {name:'Exportación en PDF', icon: roadMapPending},
    {name:'Estadísticas del escritorio', icon: roadMapPending},
    {name:'Generador de fichas (operaciones básicas)', icon: roadMapPending},
    {name:'Gestión de tutorías', icon: roadMapPending}];

  const styleRoadMapItems = {margin: '5px 0px', fontSize: '14px'};

  const enviarSugerencia = () =>{
    setSugerenciaEnviada(true);
  }

  const AgradecimientoSugerencia = () => {
    return (
      <>
      <h2>¿Tienes una propuesta?<hr/></h2>
      <div className='row mt-3'>
        <div className='col-12 text-center'>
          <FaRegCheckCircle style={{color: '#4e73df', fontSize: '50px'}}/>
        </div>
        <div className='col-12 text-center mt-3'>
          ¡Gracias! Tu solicitud se ha recibido correctamente y pronto la estudiaremos.
        </div>
      </div>
      </>
    )
  }

  const SolicitudSugerencia = () => {
    return (
      <>
      <h2>¿Tienes una propuesta?<hr/></h2>
      Gestor Docente se encuentra en continuo desarrollo, puedes aportar cualquier idea y la agregaremos a la aplicación.
            
      <div className='row mt-3'>
        <div className='col-12'>
          <Textarea setValue={()=>null} idInput={'sugerencias'} className={''} />
        </div>
        <div className='col-12'>
          <Button text={'Enviar'} onClick={() => enviarSugerencia()} className={'form-control btn-info'}/>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
    <div className='row'>
      <div className="col-md-8 col-sm-6 col-xs-12" style={{height: '600px'}}>Escritorio<hr/>
      <RenderBarChart data={data}/>
      </div>
      
      <div className='col-md-4 col-sm-6 col-xs-12'>
        <div className='row'>

          <div className='col-12'>
            <div style={{backgroundColor: 'white', border: '1px #d9d9d9 solid', padding: '15px'}}>
                <h2>Ruta de desarrollo<hr/></h2>
                {roadMap.map( r => {
                  return <p style={styleRoadMapItems}>{r.icon} {r.name}</p>
                })}
            </div>
          </div>

          <div className='col-12 mt-3'>
            <div style={{backgroundColor: 'white', border: '1px #d9d9d9 solid', padding: '15px'}}>
                {sugerenciaEnviada ? <AgradecimientoSugerencia /> : <SolicitudSugerencia />}
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
