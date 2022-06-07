import React, {useState, useEffect} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import { CheckboxText }  from "./../../../../components/checkboxText";
import { Textarea } from "./../../../../components/textarea";
import ModalPanel from './../../../../components/modalPanel'
import {update_Account, remove_Account, updateData} from './../../../../api/requests/contacts'

const Ficha = ({closePanel, linea, setDataBuilded, contextoEscolar}) => {

    const [dataLoaded, setLoaded] = useState(false);
    
    const [apellidos, setApellidos] = useState("");
    const [nombre, setNombre] = useState("");
    const [nacimiento, setNacimiento] = useState("");
    const [enfermedades, setEnfermedades] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [id, setId] = useState("");

    const [contextoEscolarV1, setContextoEscolarV1] = useState([]);
    const [contextoEscolarLoaded, setContextoEscolarLoaded] = useState(false);

    //new
    //https://i0.wp.com/www.orientacionandujar.es/wp-content/uploads/2014/08/Ficha-Personal-Alumno-Primaria-faltas-y-notas-imagen.png
    const [nHermanos, setNHermanos] = useState("");
    const [puesto, setPuesto] = useState("");
    const [grupo, setGrupo] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [cp, setCp] = useState("");
    const [provincia, setProvincia] = useState("");
    const [foto, setFoto] = useState("");

    const [nombrePadre, setNombrePadre] = useState("");
    const [telefonoPadre, setTelefonoPadre] = useState("");
    const [estudiosPadre, setEstudiosPadre] = useState("");
    const [profesionPadre, setProfesionPadre] = useState("");

    const [nombreMadre, setNombreMadre] = useState("");
    const [telefonoMadre, setTelefonoMadre] = useState("");
    const [estudiosMadre, setEstudiosMadre] = useState("");
    const [profesionMadre, setProfesionMadre] = useState("");

    const [contactoUrgencia, setContactoUrgencia] = useState("");
    const [telefonoUrgencia, setTelefonoUrgencia] = useState("");

    const [tratamientoMedico, setTratamientoMedico] = useState();
    const [tratamientoPsicologico, setTratamientoPsicologico] = useState();

    const [alergias, setAlergias] = useState("");
    const [deficitAuditivo, setDeficitAuditivo] = useState("");
    const [deficitVisual, setDeficitVisual] = useState("");
    const [deficitTactil, setDeficitTactil] = useState("");
    const [deficitRespiratorio, setDeficitRespiratorio] = useState("");
    const [deficitCardiaco, setDeficitCardiaco] = useState("");
    const [deficitMotorico, setDeficitMotorico] = useState("");
    const [deficitObs, setDeficitObs] = useState("");

    const [observaciones, setObservaciones] = useState("");

    /*const [aceptaSituacionHijo, setAceptaSituacionHijo] = useState();
    const [conocenCausasACNEAE, setConocenCausasACNEAE] = useState();
    const [excesivaProteccion, setExcesivaProteccion] = useState();
    const [refuerzanLogros, setRefuerzanLogros] = useState();
    const [castiganConductasDisruptivas, setCastiganConductasDisruptivas] = useState();
    const [dialoganHijo, setDialoganHijo] = useState();
    const [presentanColaboracion, setPresentanColaboracion] = useState();
    const [demandanReunionesTutor, setDemandanReunionesTutor] = useState();
    const [colaboranSoloSiTutorLoPide, setColaboranSoloSiTutorLoPide] = useState();
    const [organizanTiempoDeEstudio, setOrganizanTiempoDeEstudio] = useState();
    const [refuerzanAprendizaje, setRefuerzanAprendizaje] = useState();
    const [controlanEstudioDiario, setControlanEstudioDiario] = useState();

    const [fallecimientoPadre, setFallecimientoPadre] = useState();
    const [fallecimientoMadre, setFallecimientoMadre] = useState();
    const [desempleoPadre, setDesempleoPadre] = useState();
    const [custodiaPadre, setCustodiaPadre] = useState();
    const [custodiaMadre, setCustodiaMadre] = useState();
    const [custodiaAbuelos, setCustodiaAbuelos] = useState();
    const [custodiaOtros, setCustodiaOtros] = useState();*/
    const [personasConvivenSenoFamiliar, setPersonasConvivenSenoFamiliar] = useState();
    const [observacionesFamiliares, setObservacionesFamiliares] = useState();

    const [cursoRepetido, setCursoRepetido] = useState();
    const [presentaAdaptacion, setPresentaAdaptacion] = useState();
    const [promocionaConAreasSuspensas, setPromocionaConAreasSuspensas] = useState()

    const contextoEscolarCustom = () => {
      console.log(contextoEscolar);
      if(contextoEscolarLoaded===false){
        let contextoEscolarBuild = [
          {id: 'Responsable', value: contextoEscolar.responsable},
          {id: 'Despreocupado', value: contextoEscolar.despreocupado},
          {id: 'Motivado', value: contextoEscolar.motivado},
          {id: 'Desmotivado', value: contextoEscolar.desmotivado},
          {id: 'Atento', value: contextoEscolar.atento},
          {id: 'Distraido', value: contextoEscolar.distraido},
          {id: 'Reflexivo', value: contextoEscolar.reflexivo},
          {id: 'Impulsivo', value: contextoEscolar.impulsivo},
          {id: 'Independiente', value: contextoEscolar.independiente},
          {id: 'Dependiente', value: contextoEscolar.dependiente},
          {id: 'Organizado', value: contextoEscolar.organizado},
          {id: 'Desorganizado', value: contextoEscolar.desorganizado}
        ];

        console.log(contextoEscolarBuild)
        setContextoEscolarV1(contextoEscolarBuild);
        setContextoEscolarLoaded(true);
      }
    }
    contextoEscolarCustom();

    const updateContextoEscolar = (valor, idContexto) => {
      if(idContexto==="Responsable") contextoEscolar.responsable = ''+valor;
      if(idContexto==="Despreocupado") contextoEscolar.despreocupado = ''+valor;
      if(idContexto==="Motivado") contextoEscolar.motivado = ''+valor;
      if(idContexto==="Desmotivado") contextoEscolar.desmotivado = ''+valor;
      if(idContexto==="Atento") contextoEscolar.atento = ''+valor;
      if(idContexto==="Distraido") contextoEscolar.distraido = ''+valor;
      if(idContexto==="Reflexivo") contextoEscolar.reflexivo = ''+valor;
      if(idContexto==="Impulsivo") contextoEscolar.impulsivo = ''+valor;
      if(idContexto==="Independiente") contextoEscolar.independiente = ''+valor;
      if(idContexto==="Dependiente") contextoEscolar.dependiente = ''+valor;
      if(idContexto==="Organizado") contextoEscolar.organizado = ''+valor;
      if(idContexto==="Desorganizado") contextoEscolar.desorganizado = ''+valor;
      console.log(contextoEscolar);
    }

    const sendData = (type) => {
      updateData(type, contextoEscolar);
      setDataBuilded(false);
    }


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
      remove_Account( id )
      closePanel();
    }

    const updateAccount = () =>{
      update_Account(
        id,
        apellidos,
        nombre,
        nacimiento,
        enfermedades,
        domicilio,
      )
      setDataBuilded(false);
    };

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
                  <Textarea placeholder={"Enfermedades"} setValue={setEnfermedades} type={"text"} idInput={"enfermedades"} className={""} value={enfermedades} />
                </div>
                <div className="col-md-12 col-sm-12">
                  <Input placeholder={"Domicilio"} setValue={setDomicilio} type={"text"} idInput={"domicilio"} className={""} value={domicilio} />
                </div>

                <div className="col-md-12 col-sm-12">
                  Contexto escolar<hr/>
                </div>
                {contextoEscolarV1.map( e =>{
                    return (<div className="col-md-4 col-sm-6">
                              <CheckboxText placeholder={e.id} setValue={updateContextoEscolar} type={"checkbox"} idInput={e.id} className={""} value={e.value}/>
                            </div>)
                })}
                <div className="col-md-12"><Button text={'Actualizar Contexto escolar'} onClick={() => sendData('updateContextoEscolar')}/></div>

    
                <div className="col-md-12 col-sm-12 text-center mt-3">
                <Button text={nombre===""?"Guardar":"Actualizar"} onClick={() => updateAccount()} />
                <Button text={"Eliminar"} onClick={() => removeContact()} />
                </div>
            </div>

            </>} closePanel={closePanel}
        />
      );
}

export default Ficha;