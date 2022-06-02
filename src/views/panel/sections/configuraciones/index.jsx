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

  const Configurador = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-body">A Basic Panel</div>
      </div>
    )
  }

  useEffect( () =>{
    if(!dataBuilded) getData();
  }, [dataBuilded]);

  return (
    <>
    <div>Configuraciones (Cursos y asignaturas)</div>
    </>
  )
}
