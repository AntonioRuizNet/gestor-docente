import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
//Actions
import allActions from "./../../../../actions";
//Components
import { Button } from '../../../../components/button';
import {update_Perfil} from './../../../../api/requests/perfil'
import {Input} from './../../../../components/input'
import { CheckboxText } from '../../../../components/checkboxText';
import { FloatMessage } from '../../../../components/floatMessage';

import { idUser } from "./../../../../api/constants";
import { get_AdminData } from "./../../../../api/requests/globals";

export default function Perfil() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.globalReducer.profile);
    const [nombre, setNombre] = useState(profile.nombre);
    const [clave, setClave] = useState('');
    const [mock, setMock] = useState(profile.mock);
    const [adminDataLoaded, setAdminDataLoaded] = useState(false);
    const [adminData, setAdminData] = useState([]);

    const [messageActive, setMessageActive] = useState({text: "Texto", state: 0, active: false});

    const updateNombre = (data) => {
        setNombre(data);
    }

    const sendData = () => {
        dispatch(allActions.globalActions.setProfile({nombre: nombre, mock: `${mock}`}));
        const objectData = [{nombre: nombre, mock: `${mock}`, clave: clave}];
        update_Perfil(objectData);

        //Send floatMessage
        setMessageActive({text: "Cambios guardados", state: 1, activate: true});
        setTimeout(function() { 
            setMessageActive({text: "", state: 0, activate: false}); 
        }, 4000);
    }

    const getAdminData = async() =>{
        const response = await get_AdminData();
        if(response){
            setAdminData(response);
            console.log(response)
        }
    }

    useEffect(() => {
        if (!adminDataLoaded && idUser()==="10") {
            getAdminData();
            setAdminDataLoaded(true);
        }
      }, [adminDataLoaded]);

    return (
        <>
            <div className='row'>
                <div className="col-md-12 col-sm-12 col-xs-12">Perfil<hr/></div>
            </div>

            <div style={{backgroundColor: 'white', border: '1px #d9d9d9 solid', padding: '15px'}}>
                <div className="row mt-4">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <Input placeholder={'Nombre'} setValue={updateNombre} type={''} idInput={''} className={''} value={profile.nombre} />
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <Input placeholder={'Nueva clave (sólo si quieres cambiarla)'} setValue={setClave} type={''} idInput={''} className={''} value={''} />
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12 text-center">
                        <p style={{marginBottom: '5px'}}>Datos de prueba</p>
                        <CheckboxText placeholder={''} setValue={setMock} type={'checkbox'} idInput={''} className={''} value={profile.mock} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Button text={'Actualizar'} onClick={sendData} className={''} />
                    </div>
                </div>
            </div>

            {adminData.estadisticas !== undefined && <div className="row mt-4" style={{backgroundColor: 'white', border: '1px #d9d9d9 solid', padding: '15px'}}>
            {adminData.estadisticas !== undefined &&   
                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <div className="row mt-4">
                                            <div className="col-4">Fecha<hr/></div>
                                            <div className="col-4">Visitas<hr/></div>
                                            <div className="col-4">Referencia<hr/></div>
                                        </div>
                                        {adminData.estadisticas.map( e => {
                                            return (
                                                <div className="row mt-4">
                                                    <div className="col-4">{e.fecha}</div>
                                                    <div className="col-4">{e.visitas}</div>
                                                    <div className="col-4">{e.referencia}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
            }

            {adminData.usuarios !== undefined &&   
                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                        <div className="row mt-4">
                                            <div className="col-7">Email<hr/></div>
                                            <div className="col-4">Registro<hr/></div>
                                            <div className="col-1">Mock<hr/></div>
                                        </div>
                                        {adminData.usuarios.map( e => {
                                            return (
                                                <div className="row mt-4">
                                                    <div className="col-7">{e.email}</div>
                                                    <div className="col-4">{e.registro}</div>
                                                    <div className="col-1">{e.mock}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
            }

            {adminData.mensajeria !== undefined &&   
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="row mt-4">
                                            <div className="col-2">Emisor<hr/></div>
                                            <div className="col-2">Receptor<hr/></div>
                                            <div className="col-8">Mensaje<hr/></div>
                                        </div>
                                        {adminData.mensajeria.map( e => {
                                            return (
                                                <div className="row mt-4">
                                                    <div className="col-2">{e.emisor}</div>
                                                    <div className="col-2">{e.receptor}</div>
                                                    <div className="col-8">{e.mensaje}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
            }
            </div>}
            {messageActive.activate && <FloatMessage text={messageActive.text} state={messageActive.state}/>}
        </>
    )
}
