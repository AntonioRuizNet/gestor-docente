import React, {useState} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import { CheckboxText }  from "./../../../../components/checkboxText";
import { Textarea } from "./../../../../components/textarea";
import ModalPanel from './../../../../components/modalPanel'
import {updateData} from './../../../../api/requests/contacts'

const Ficha = ({closePanel, linea, setDataBuilded, contextoEscolar, contextoFamiliar}) => {

    //Genero nuevo array para pintar checkbox fácil
    const [contextoEscolarV1, setContextoEscolarV1] = useState([]);
    const [contextoEscolarLoaded, setContextoEscolarLoaded] = useState(false);

    const [contextoFamiliarV1, setContextoFamiliarV1] = useState([]);
    const [contextoFamiliarLoaded, setContextoFamiliarLoaded] = useState(false);

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
    const [promocionaConAreasSuspensas, setPromocionaConAreasSuspensas] = useState();


    //CONTEXTO PERSONAL

    const updateContextoPersonal = (valor, idContexto) => {
      console.log(valor, idContexto)
      if(idContexto==="apellidos") linea.apellidos = ''+valor;
      if(idContexto==="nombre") linea.nombre = ''+valor;
      if(idContexto==="nacimiento") linea.nacimiento = ''+valor;
      if(idContexto==="enfermedades") linea.enfermedades = ''+valor;
      if(idContexto==="domicilio") linea.domicilio = ''+valor;
      console.log(linea);
    }


    //CONTEXTO ESCOLAR

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

    //CONTEXTO FAMILIAR

    const contextoFamiliarCustom = () => {
      console.log(contextoFamiliar);
      if(contextoFamiliarLoaded===false){
        let contextoFamiliarBuild = [
          {id: 'aceptaSituacionHijo', value: contextoFamiliar.aceptaSituacionHijo},
        ];

        console.log(contextoFamiliarBuild)
        setContextoFamiliarV1(contextoFamiliarBuild);
        setContextoFamiliarLoaded(true);
      }
    }
    contextoFamiliarCustom();

    const updateContextoFamiliar = (valor, idContexto) => {
      if(idContexto==="aceptaSituacionHijo") contextoFamiliar.aceptaSituacionHijo = ''+valor;
      console.log(contextoFamiliar);
    }


    const sendData = (type) => {
      if(type==="updateContextoEscolar") updateData(type, contextoEscolar);
      if(type==="updateContextoFamiliar") updateData(type, contextoFamiliar);
      if(type==="updateContextoPersonal") updateData(type, linea);
      if(type==="removeAccount") updateData(type, linea);
      setDataBuilded(false);
    }

    return (
        <ModalPanel info={
            <>
            
            <h4>{linea.nombre===""?"Nuevo contacto": "Editar detalles de "+linea.nombre}</h4>
            <hr />
            <div className="row">
                <div className="col-md-6 col-sm-12">
                  <Input placeholder={"Apellidos"} setValue={updateContextoPersonal} type={"text"} idInput={"apellidos"} className={""} value={linea.apellidos} />
                </div>
                <div className="col-md-6 col-sm-12">
                  <Input placeholder={"Nombre"} setValue={updateContextoPersonal} type={"text"} idInput={"nombre"} className={""} value={linea.nombre} />
                </div>
                <div className="col-md-4 col-sm-12">
                  <Input placeholder={"Nacimiento"} setValue={updateContextoPersonal} type={"date"} idInput={"nacimiento"} className={""} value={linea.nacimiento} />
                </div>
                <div className="col-md-8 col-sm-12">
                  <Textarea placeholder={"Enfermedades"} setValue={updateContextoPersonal} type={"text"} idInput={"enfermedades"} className={""} value={linea.enfermedades} />
                </div>
                <div className="col-md-12 col-sm-12">
                  <Input placeholder={"Domicilio"} setValue={updateContextoPersonal} type={"text"} idInput={"domicilio"} className={""} value={linea.domicilio} />
                </div>


                <div className="col-md-12 col-sm-12">
                  Contexto Familiar<hr/>
                </div>
                {contextoFamiliarV1.map( e =>{
                    return (<div className="col-md-4 col-sm-6">
                              <CheckboxText placeholder={e.id} setValue={updateContextoFamiliar} type={"checkbox"} idInput={e.id} className={""} value={e.value}/>
                            </div>)
                })}
                <div className="col-md-12"><Button text={'Actualizar Contexto familiar'} onClick={() => sendData('updateContextoFamiliar')}/></div>


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
                <Button text={linea.nombre===""?"Guardar":"Actualizar"} onClick={() => sendData('updateContextoPersonal')} />
                <Button text={"Eliminar"} onClick={() => sendData('removeAccount')} />
                </div>
            </div>

            </>} closePanel={closePanel}
        />
      );
}

export default Ficha;