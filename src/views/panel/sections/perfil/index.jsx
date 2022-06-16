import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
//Actions
import allActions from "./../../../../actions";
//Components
import { Button } from '../../../../components/button';
import {update_Perfil} from './../../../../api/requests/perfil'
import {Input} from './../../../../components/input'
import { CheckboxText } from '../../../../components/checkboxText';
import { FloatMessage } from '../../../../components/floatMessage';

export default function Perfil() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.globalReducer.profile);

    const [nombre, setNombre] = useState(profile.nombre);
    const [clave, setClave] = useState('');
    const [mock, setMock] = useState(profile.mock);

    const [messageActive, setMessageActive] = useState({text: "Texto", state: 0, active: false});


    const sendData = () => {
        dispatch(allActions.globalActions.setProfile({nombre: nombre, mock: `${mock}`}));
        const objectData = [{nombre: nombre, mock: `${mock}`, clave: clave}];
        console.log(objectData);
        update_Perfil(objectData);

        //Send floatMessage
        setMessageActive({text: "Cambios guardados", state: 1, activate: true});
        setTimeout(function() { 
            setMessageActive({text: "", state: 0, activate: false}); 
        }, 4000);
    }

    return (
        <>
            <div className='row'>
                <div className="col-md-12 col-sm-12 col-xs-12">Perfil<hr/></div>
            </div>

            <div style={{backgroundColor: 'white', border: '1px #d9d9d9 solid', padding: '15px'}}>
                <div className="row mt-4">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <Input placeholder={'Nombre'} setValue={setNombre} type={''} idInput={''} className={''} value={profile.nombre} />
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <Input placeholder={'Nueva clave (sólo si quieres cambiarla)'} setValue={setClave} type={''} idInput={''} className={''} value={''} />
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12 text-center">
                        <label>Datos de prueba</label><br/>
                        <CheckboxText placeholder={''} setValue={setMock} type={'checkbox'} idInput={''} className={''} value={profile.mock} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Button text={'Actualizar'} onClick={sendData} className={''} />
                    </div>
                </div>
            </div>
            {messageActive.activate && <FloatMessage text={messageActive.text} state={messageActive.state}/>}
        </>
    )
}
