import React, {useState} from 'react';
import { FaFlagCheckered, FaFlag, FaRegCheckCircle } from "react-icons/fa";
import { Button } from '../../../../components/button';
import { Textarea } from '../../../../components/textarea';
import {RenderBarChart} from '../../../../components/renderBarChart';
import { FloatMessage } from '../../../../components/floatMessage';
import {roadMap} from '../../../../api/constants'
import {escritorioFaltasDataChart, escritorioNotasDataChart} from './../../../../api/mock';
import {send_Mensaje} from './../../../../api/requests/globals'

export default function Escritorio({accounts}) {
  let dataFaltas = [];
  let dataNotas = [];

  const [messageActive, setMessageActive] = useState({text: "Texto", state: 0, active: false});
  const [sugerenciaEnviada, setSugerenciaEnviada] = useState(false);
  let sugerencias;

  const roadMapDone = <FaFlagCheckered style={{color: '#4e73df'}}/>;
  const roadMapPending = <FaFlag style={{color: '#e1d300'}}/>;
  const styleRoadMapItems = {margin: '5px 0px', fontSize: '14px'};

  const setSugerencias = (data) => {
    sugerencias = data;
  }

  const enviarSugerencia = () =>{
    setSugerenciaEnviada(true);

    send_Mensaje(sugerencias, 'Sugerencia')
      .then((response,reject) => {
        if(response.ok){ 
          //Send floatMessage
          setMessageActive({text: "Solicitud enviada", state: 1, activate: true});
          setTimeout(function() { 
              setMessageActive({text: "", state: 0, activate: false}); 
          }, 4000);
        }
    })
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
          <Textarea setValue={setSugerencias} idInput={'sugerencias'} className={''} value={''}/>
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
      <div className="col-md-8 col-sm-6 col-xs-12">Escritorio<hr/>
      <div className='row'>
        <div className="col-12" style={{height: '300px'}}>
        <RenderBarChart data={dataFaltas} mocked={escritorioFaltasDataChart} dataKey1={"Alumnos"} dataKey2={"Faltas"}/>
        </div>
        <div className="col-12 mt-4" style={{height: '300px'}}>
        <RenderBarChart data={dataNotas} mocked={escritorioNotasDataChart} dataKey1={"Alumnos"} dataKey2={"Notas"}/>
        </div>
      </div>
      </div>
      
      <div className='col-md-4 col-sm-6 col-xs-12'>
        <div className='row'>

          <div className='col-12'>
            <div style={{backgroundColor: 'white', border: '1px #d9d9d9 solid', padding: '15px'}}>
                <h2>Ruta de desarrollo<hr/></h2>
                {roadMap.map( r => {
                  return <p style={styleRoadMapItems}>{r.done?roadMapDone:roadMapPending} {r.name}</p>
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
    {messageActive.activate && <FloatMessage text={messageActive.text} state={messageActive.state}/>}
    </>
  )
}
