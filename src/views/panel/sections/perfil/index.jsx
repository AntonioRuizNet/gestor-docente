import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
//Actions
import allActions from "./../../../../actions";
//Components
import { Button } from '../../../../components/button';
import {update_Perfil} from './../../../../api/requests/perfil'
import {Input} from './../../../../components/input'
import { CheckboxText } from '../../../../components/checkboxText';

export default function Perfil() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.globalReducer.profile);

    //const [dataBuilded, setDataBuilded] = useState(false);
    const [data, setData] = useState(profile);

    /*const getData = async () => {
        if(!dataBuilded){
          const data = await get_Perfil();
          if(data){
            setData(data.perfil)
          }
        }
        setDataBuilded(true)
    }*/

    const updateData = () => {
        dispatch(allActions.globalActions.setProfile({nombre: "", mock: "true"}));
        console.log(data);
        //update_Perfil(perfil);
        //setDataBuilded(false);
      }

    /*useEffect( () =>{
        if(!dataBuilded) getData();
      }, [dataBuilded]);*/

    return (
        <>
            <div className='row'>
                <div className="col-md-12 col-sm-12 col-xs-12">Perfil<hr/></div>
            </div>

            <div style={{backgroundColor: 'white', border: '1px #d9d9d9 solid', padding: '15px'}}>
                <div className="row mt-4">
                    <div className="col-6">
                        <Input placeholder={'Nombre'} setValue={''} type={''} idInput={''} className={''} value={profile.nombre} />
                    </div>
                    <div className="col-4">
                        <Input placeholder={'Nueva clave'} setValue={''} type={''} idInput={''} className={''} value={''} />
                    </div>
                    <div className="col-2">
                        <label>Datos de prueba</label><br/>
                        <CheckboxText placeholder={''} setValue={''} type={'checkbox'} idInput={''} className={''} value={profile.mock} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Button text={'Actualizar'} onClick={updateData} className={''} />
                    </div>
                </div>
            </div>
        </>
    )
}
