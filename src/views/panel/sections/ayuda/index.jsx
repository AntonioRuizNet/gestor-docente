import React, {useState, useEffect} from 'react'
import { Button } from '../../../../components/button'
import { FloatMessage } from '../../../../components/floatMessage';
import { Select } from '../../../../components/select'
import { Textarea } from '../../../../components/textarea'

import {send_Mensaje, get_Mensajes} from './../../../../api/requests/globals'

export const Ayuda = () => {
    const opcSelect = [{id: 0, nombre: 'Sugerencia'}, {id: 1, nombre: 'Incidencia'}, {id: 2, nombre: 'Duda'}];
    const [messageActive, setMessageActive] = useState({text: "Texto", state: 0, active: false});
    const [mensaje, setMensaje] = useState('');
    const [tipo, setTipo] = useState('');
    const [dataBuilded, setDataBuilded] = useState(false);
    const [mensajes, setMensajes] = useState([]);

    const getMensajes = async () => {
        if (!dataBuilded) {
            const mensajesResponse = await get_Mensajes();
            if (mensajesResponse) {
                setMensajes(mensajesResponse.mensajeria);
            }
        }
        setDataBuilded(true);
    };

    useEffect(() => {
        if (!dataBuilded) getMensajes();
    }, [dataBuilded]);


    const enviarMensaje = () =>{
        let tipoName = opcSelect.filter( e => e.id == tipo)[0].nombre;
        send_Mensaje(mensaje, tipoName)
          .then((response,reject) => {
            if(response.ok){ 
                //Send floatMessage
                setMessageActive({text: "Solicitud enviada", state: 1, activate: true});
                setTimeout(function() { 
                    setMessageActive({text: "", state: 0, activate: false}); 
                }, 4000);
                setTipo('');
                setMensaje('');
            }
        })
        
      }

    return (
        <>
        <div className="row">
            <div className="col-12">
                <div style={{backgroundColor: 'white', border: '1px #d9d9d9 solid', padding: '15px'}}>
                    Envía un mensaje al equipo de soporte<hr/>
                    <Textarea placeholder={'Mensaje'} setValue={setMensaje} idInput={'nuevoMensaje'} className={''} value={mensaje} />
                    <div className="row">
                        <div className="col-6"><Select placeholder={"Tipo de consulta"} setValue={setTipo} idInput={"opcsMensaje"} className={"bg-light"} values={opcSelect} selected={''} /></div>
                        <div className="col-6"><Button text={'Enviar'} onClick={enviarMensaje} className={'mt-3'} /></div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-4">
                <div style={{backgroundColor: '#f4f4f4', border: '1px #d9d9d9 solid', padding: '15px'}}>
                    Listado de mensajes<hr/>
                    {mensajes.map(m=>{
                        return (<div className="row" style={{color: 'black', borderBottom: '1px lightgrey solid', padding: '6px 1px', overflowY: 'auto', maxHeight: '350px'}}>
                                    <div className="col-md-1 col-sm-2">{m.emisor==="0"?<b>Soporte</b>:<b style={{color: '#335acb'}}>Tu</b>}</div>
                                    <div className="col-md-1 col-sm-2">{m.receptor==="0"?<b>Soporte</b>:<b style={{color: '#335acb'}}>Tu</b>}</div>
                                    <div className="col-md-1 col-sm-2">{m.tipo}</div>
                                    <div className="col-md-6 col-sm-12">{m.mensaje}</div>
                                    <div className="col-md-3 col-sm-12" style={{textAlign: 'right'}}>{m.fecha}</div>
                                </div>
                            )
                    })}
                </div>
            </div>
        </div>
        {messageActive.activate && <FloatMessage text={messageActive.text} state={messageActive.state}/>}
        </>
    )
}
