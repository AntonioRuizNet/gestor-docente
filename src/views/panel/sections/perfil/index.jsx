import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
//Actions
import allActions from "./../../../../actions";
//Components
import { Button } from '../../../../components/button';
import {get_Perfil, update_Perfil} from './../../../../api/requests/perfil'
import {Input} from './../../../../components/input'
import { CheckboxText } from '../../../../components/checkboxText';

export default function Perfil() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.globalReducer.profile);

    const [dataBuilded, setDataBuilded] = useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
        if(!dataBuilded){
          const data = await get_Perfil();
          if(data){
            setData(data.perfil)
          }
        }
        setDataBuilded(true)
    }

    const updateData = () => {
        dispatch(allActions.globalActions.setProfile({nombre: "", mock: "true"}));
        console.log(data);
        //update_Perfil(perfil);
        //setDataBuilded(false);
      }

    useEffect( () =>{
        if(!dataBuilded) getData();
      }, [dataBuilded]);

    return (
        <>
        <div className="row mt-4">
            <div className="col-4">
                <Input placeholder={'Nombre'} setValue={''} type={''} idInput={''} className={''} value={profile.nombre} />
            </div>
            <div className="col-4">
                <Input placeholder={'Clave'} setValue={''} type={''} idInput={''} className={''} value={''} />
            </div>
            <div className="col-4">
                <p>Datos de prueba</p>
                <CheckboxText placeholder={''} setValue={''} type={''} idInput={''} className={''} value={profile.mock} />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Button text={'Actualizar'} onClick={updateData} className={''} />
            </div>
        </div>
        </>
    )
}
