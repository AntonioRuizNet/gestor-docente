import React, {useState, useEffect} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import ModalPanel from './../../../../components/modalPanel'
import {update_Account, remove_Account} from './../../../../api/requests/contacts'

const Ficha = ({closePanel, linea, setDataBuilded}) => {

  /*
    foto, n_hermanos, curso, grupo
    nombre padre, tel, estudios, profesion
    nombre madre, tel, estudios, profesion
    contacto urgencia

    -- datos-medicos --
    tratamiento medico, tratamiento psico, informe medico, diagnostico
    hospitalizado, operado,
    alergias
    enfermedades (ya implementado)
    deficit tipo auditivo, visual, tactil, respiratorio, cardiaco, motorico [Alto, medio, bajo]
    observaciones medicas

    --contexto familiar --


    -- contexto escolar --
  */
    const [dataReady, setDataReady] = useState(false);
    const [dataLoaded, setLoaded] = useState(false);
    
    const [apellidos, setApellidos] = useState("");
    const [nombre, setNombre] = useState("");
    const [nacimiento, setNacimiento] = useState("");
    const [enfermedades, setEnfermedades] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [id, setId] = useState("");

    const checkData = () => {
      const lineaFormated = linea[0];
      if(lineaFormated && lineaFormated.length>0 && !dataLoaded){
        setId(lineaFormated[0])
        setNombre(lineaFormated[2]);
        setApellidos(lineaFormated[3]);
        setNacimiento(lineaFormated[4]);
        setEnfermedades(lineaFormated[5]);
        setDomicilio(lineaFormated[6]);
        setLoaded(true);
      }
    }
    checkData();

    const removeContact = () => {
      remove_Account(
        id,
      )
      closePanel();
    }

    useEffect( () =>{
        if(dataReady){
          setDataReady(false);
          update_Account(
            id,
            apellidos,
            nombre,
            nacimiento,
            enfermedades,
            domicilio,
          )
          closePanel();
          setDataBuilded(false);
        }
    }, [dataReady]);

    return (
        <ModalPanel info={
            <>
            
            <h4>{nombre===""?"Nuevo contacto": "Editar detalles de "+nombre}</h4>
            <hr />
            <div className="row">
                <div className="col-md-6 col-sm-12">
                <Input placeholder={"Apellidos"} setValue={setApellidos} type={"text"} idInput={"apellidos"} className={""} value={apellidos} />
                </div>
                <div className="col-md-6 col-sm-12">
                <Input placeholder={"Nombre"} setValue={setNombre} type={"text"} idInput={"nombre"} className={""} value={nombre} />
                </div>
                <div className="col-md-4 col-sm-12">
                <Input placeholder={"Nacimiento"} setValue={setNacimiento} type={"date"} idInput={"nacimiento"} className={""} value={nacimiento} />
                </div>
                <div className="col-md-8 col-sm-12">
                <Input placeholder={"Enfermedades"} setValue={setEnfermedades} type={"text"} idInput={"enfermedades"} className={""} value={enfermedades} />
                </div>
                <div className="col-md-12 col-sm-12">
                <Input placeholder={"Domicilio"} setValue={setDomicilio} type={"text"} idInput={"domicilio"} className={""} value={domicilio} />
                </div>
    
                <div className="col-md-12 col-sm-12 text-center mt-3">
                <Button text={nombre===""?"Guardar":"Actualizar"} onClick={() => setDataReady(true)} />
                <Button text={"Eliminar"} onClick={() => removeContact()} />
                </div>
            </div>
            </>} closePanel={closePanel}
        />
      );
}

export default Ficha;