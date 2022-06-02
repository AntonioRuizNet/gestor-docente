import React, {useState, useEffect} from 'react'
import {get_Configuraciones} from './../../../../api/requests/configuraciones'


export default function Configuraciones() {

  const [dataBuilded, setDataBuilded] = useState(false);
  const [asignaturas, setAsignaturas] = useState(false);
  
  const getData = async () => {
    if(!dataBuilded){
      const data = await get_Configuraciones();
      if(data){
        console.log(data);
        setAsignaturas(data.asignaturas)
      }
    }
    setDataBuilded(true)
  }

  const Configurador = ({title}) => {
    return (
      <div className="" style={{border: '1px lightgray solid', borderRadius: '3px', padding: '15px', backgroundColor: 'whitesmoke'}}>
        <b>{title}</b><hr/>
        <div className="">A Basic Panel</div>
      </div>
    )
  }

  useEffect( () =>{
    if(!dataBuilded) getData();
  }, [dataBuilded]);

  return (
    <div className="row">
      <div className="col">
        <Configurador title={'Asignaturas'}/>
      </div>
      <div className="col">
        <Configurador title={'Cursos'}/>
      </div>
    </div>
  )
}
