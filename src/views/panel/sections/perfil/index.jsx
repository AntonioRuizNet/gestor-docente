import React, {useState, useEffect} from 'react'
import { Button } from '../../../../components/button';
import {get_Perfil, update_Perfil} from './../../../../api/requests/perfil'
import {Input} from './../../../../components/input'

export default function Perfil() {

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

    const updateData= () => {
        console.log(data);
        //update_Perfil(perfil);
        //setDataBuilded(false);
      }

    useEffect( () =>{
        if(!dataBuilded) getData();
      }, [dataBuilded]);

    return (
        <>
        <div className="row">
            <div className="col-4">
                <Input placeholder={'Test'} setValue={''} type={''} idInput={''} className={''} value={''} />
            </div>
            <div className="col-4">
                <Input placeholder={'Test'} setValue={''} type={''} idInput={''} className={''} value={''} />
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
