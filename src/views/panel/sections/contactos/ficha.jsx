import React, {useState} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import { CheckboxText }  from "./../../../../components/checkboxText";
import { Textarea } from "./../../../../components/textarea";
import {TabsPanels} from './../../../../components/tabsPanels'
import {Select} from './../../../../components/select'
import ModalPanel from './../../../../components/modalPanel'
import {updateData} from './../../../../api/requests/contacts'

const Ficha = ({closePanel, linea, setDataBuilded, contextoEscolar, contextoFamiliar, contextoMedico, periodos}) => {

    //Genero nuevo array para pintar checkbox fácil
    const [contextoEscolarV1, setContextoEscolarV1] = useState([]);
    const [contextoEscolarLoaded, setContextoEscolarLoaded] = useState(false);

    const [contextoFamiliarV1, setContextoFamiliarV1] = useState([]);
    const [contextoFamiliarLoaded, setContextoFamiliarLoaded] = useState(false);

    //https://i0.wp.com/www.orientacionandujar.es/wp-content/uploads/2014/08/Ficha-Personal-Alumno-Primaria-faltas-y-notas-imagen.png
    

    //CONTEXTO PERSONAL

    const updateContextoPersonal = (valor, idContexto) => {
      console.log(valor, idContexto)
      if(idContexto==="apellidos") linea.apellidos = ''+valor;
      if(idContexto==="nombre") linea.nombre = ''+valor;
      if(idContexto==="nacimiento") linea.nacimiento = ''+valor;
      if(idContexto==="domicilio") linea.domicilio = ''+valor;

      if(idContexto==="nHermanos") linea.nHermanos = ''+valor;
      if(idContexto==="puesto") linea.puesto = ''+valor;
      if(idContexto==="grupo") linea.grupo = ''+valor;
      if(idContexto==="localidad") linea.localidad = ''+valor;
      if(idContexto==="cp") linea.cp = ''+valor;
      if(idContexto==="provincia") linea.provincia = ''+valor;
      if(idContexto==="foto") linea.foto = ''+valor;

      if(idContexto==="nombrePadre") linea.nombrePadre = ''+valor;
      if(idContexto==="telefonoPadre") linea.telefonoPadre = ''+valor;
      if(idContexto==="estudiosPadre") linea.estudiosPadre = ''+valor;
      if(idContexto==="profesionPadre") linea.profesionPadre = ''+valor;

      if(idContexto==="nombreMadre") linea.nombreMadre = ''+valor;
      if(idContexto==="telefonoMadre") linea.telefonoMadre = ''+valor;
      if(idContexto==="estudiosMadre") linea.estudiosMadre = ''+valor;
      if(idContexto==="profesionMadre") linea.profesionMadre = ''+valor;

      if(idContexto==="contactoUrgencia") linea.contactoUrgencia = ''+valor;
      if(idContexto==="telefonoUrgencia") linea.telefonoUrgencia = ''+valor;
      if(idContexto==="periodo") linea.periodo = ''+valor;
      console.log(linea);
    }

    //CONTEXTO MEDICO

    const updateContextoMedico = (valor, idContexto) => {
      console.log(valor, idContexto)
      if(idContexto==="tratamientoMedico") contextoMedico.tratamientoMedico = ''+valor;
      if(idContexto==="tratamientoPsicologico") contextoMedico.tratamientoPsicologico = ''+valor;

      if(idContexto==="alergias") contextoMedico.alergias = ''+valor;
      if(idContexto==="enfermedades") contextoMedico.enfermedades = ''+valor;
      if(idContexto==="deficitAuditivo") contextoMedico.deficitAuditivo = ''+valor;
      if(idContexto==="deficitVisual") contextoMedico.deficitVisual = ''+valor;
      if(idContexto==="deficitTactil") contextoMedico.deficitTactil = ''+valor;
      if(idContexto==="deficitRespiratorio") contextoMedico.deficitRespiratorio = ''+valor;
      if(idContexto==="deficitCardiaco") contextoMedico.deficitCardiaco = ''+valor;
      if(idContexto==="deficitMotorico") contextoMedico.deficitMotorico = ''+valor;
      if(idContexto==="deficitObs") contextoMedico.deficitObs = ''+valor;
      if(idContexto==="periodo") contextoMedico.periodo = ''+valor;

      if(idContexto==="observacionesMedicas") contextoMedico.observacionesMedicas = ''+valor;
      console.log(contextoMedico);
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
          {id: 'Desorganizado', value: contextoEscolar.desorganizado},
          {id: 'comprensionLectora', value: contextoEscolar.comprensionLectora},
          {id: 'comprensionOral', value: contextoEscolar.comprensionOral},
          {id: 'expresionEscrita', value: contextoEscolar.expresionEscrita},
          {id: 'expresionOral', value: contextoEscolar.expresionOral},
          {id: 'calculo', value: contextoEscolar.calculo},
          {id: 'resolucionDeProblemas', value: contextoEscolar.resolucionDeProblemas},
          {id: 'ortografia', value: contextoEscolar.ortografia},
          {id: 'vocabulario', value: contextoEscolar.vocabulario},
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
      if(idContexto==="cursoRepetido") contextoEscolar.cursoRepetido = ''+valor;
      if(idContexto==="presentaAdaptacion") contextoEscolar.presentaAdaptacion = ''+valor;
      if(idContexto==="promocionaConAreasSuspensas") contextoEscolar.promocionaConAreasSuspensas = ''+valor;
      if(idContexto==="comprensionLectora") contextoEscolar.comprensionLectora = ''+valor;
      if(idContexto==="comprensionOral") contextoEscolar.comprensionOral = ''+valor;
      if(idContexto==="expresionEscrita") contextoEscolar.expresionEscrita = ''+valor;
      if(idContexto==="expresionOral") contextoEscolar.expresionOral = ''+valor;
      if(idContexto==="calculo") contextoEscolar.calculo = ''+valor;
      if(idContexto==="resolucionDeProblemas") contextoEscolar.resolucionDeProblemas = ''+valor;
      if(idContexto==="ortografia") contextoEscolar.ortografia = ''+valor;
      if(idContexto==="vocabulario") contextoEscolar.vocabulario = ''+valor;
      if(idContexto==="insersionSocial_interesAprendizaje") contextoEscolar.interesAprendizaje = ''+valor;
      if(idContexto==="insersionSocial_relacionAlumnos") contextoEscolar.relacionAlumnos = ''+valor;
      if(idContexto==="insersionSocial_habitosTrabajo") contextoEscolar.habitosTrabajo = ''+valor;
      if(idContexto==="insersionSocial_habitosEstudio") contextoEscolar.habitosEstudio = ''+valor;
      if(idContexto==="insersionSocial_comportamiento") contextoEscolar.comportamiento = ''+valor;
      if(idContexto==="observacionesEscolares") contextoEscolar.observacionesEscolares = ''+valor;
      if(idContexto==="periodo") contextoEscolar.periodo = ''+valor;
      console.log(contextoEscolar);
    }

    //CONTEXTO FAMILIAR

    const contextoFamiliarCustom = () => {
      console.log(contextoFamiliar);
      if(contextoFamiliarLoaded===false){
        let contextoFamiliarBuild = [
          {id: 'aceptaSituacionHijo', value: contextoFamiliar.aceptaSituacionHijo},
          {id: 'conocenCausasACNEAE', value: contextoFamiliar.conocenCausasACNEAE},
          {id: 'excesivaProteccion', value: contextoFamiliar.excesivaProteccion},
          {id: 'refuerzanLogros', value: contextoFamiliar.refuerzanLogros},
          {id: 'castiganConductasDisruptivas', value: contextoFamiliar.castiganConductasDisruptivas},
          {id: 'dialoganHijo', value: contextoFamiliar.dialoganHijo},
          {id: 'presentanColaboracion', value: contextoFamiliar.presentanColaboracion},
          {id: 'demandanReunionesTutor', value: contextoFamiliar.demandanReunionesTutor},
          {id: 'colaboranSoloSiTutorLoPide', value: contextoFamiliar.colaboranSoloSiTutorLoPide},
          {id: 'organizanTiempoDeEstudio', value: contextoFamiliar.organizanTiempoDeEstudio},
          {id: 'refuerzanAprendizaje', value: contextoFamiliar.refuerzanAprendizaje},
          {id: 'controlanEstudioDiario', value: contextoFamiliar.controlanEstudioDiario},

          {id: 'fallecimientoPadre', value: contextoFamiliar.fallecimientoPadre},
          {id: 'fallecimientoMadre', value: contextoFamiliar.fallecimientoMadre},
          {id: 'desempleoPadre', value: contextoFamiliar.desempleoPadre},
          {id: 'desempleoMadre', value: contextoFamiliar.desempleoMadre},
          {id: 'custodiaPadre', value: contextoFamiliar.custodiaPadre},
          {id: 'custodiaMadre', value: contextoFamiliar.custodiaMadre},
          {id: 'custodiaAbuelos', value: contextoFamiliar.custodiaAbuelos},
          {id: 'custodiaOtros', value: contextoFamiliar.custodiaOtros},
        ];

        console.log(contextoFamiliarBuild)
        setContextoFamiliarV1(contextoFamiliarBuild);
        setContextoFamiliarLoaded(true);
      }
    }
    contextoFamiliarCustom();

    const updateContextoFamiliar = (valor, idContexto) => {
      if(idContexto==="aceptaSituacionHijo") contextoFamiliar.aceptaSituacionHijo = ''+valor;
      if(idContexto==="conocenCausasACNEAE") contextoFamiliar.conocenCausasACNEAE = ''+valor;
      if(idContexto==="excesivaProteccion") contextoFamiliar.excesivaProteccion = ''+valor;
      if(idContexto==="refuerzanLogros") contextoFamiliar.refuerzanLogros = ''+valor;
      if(idContexto==="castiganConductasDisruptivas") contextoFamiliar.castiganConductasDisruptivas = ''+valor;
      if(idContexto==="dialoganHijo") contextoFamiliar.dialoganHijo = ''+valor;
      if(idContexto==="presentanColaboracion") contextoFamiliar.presentanColaboracion = ''+valor;
      if(idContexto==="demandanReunionesTutor") contextoFamiliar.demandanReunionesTutor = ''+valor;
      if(idContexto==="colaboranSoloSiTutorLoPide") contextoFamiliar.colaboranSoloSiTutorLoPide = ''+valor;
      if(idContexto==="organizanTiempoDeEstudio") contextoFamiliar.organizanTiempoDeEstudio = ''+valor;
      if(idContexto==="refuerzanAprendizaje") contextoFamiliar.refuerzanAprendizaje = ''+valor;
      if(idContexto==="controlanEstudioDiario") contextoFamiliar.controlanEstudioDiario = ''+valor;

      if(idContexto==="fallecimientoPadre") contextoFamiliar.fallecimientoPadre = ''+valor;
      if(idContexto==="fallecimientoMadre") contextoFamiliar.fallecimientoMadre = ''+valor;
      if(idContexto==="desempleoPadre") contextoFamiliar.desempleoPadre = ''+valor;
      if(idContexto==="desempleoMadre") contextoFamiliar.desempleoMadre = ''+valor;
      if(idContexto==="custodiaPadre") contextoFamiliar.custodiaPadre = ''+valor;
      if(idContexto==="custodiaMadre") contextoFamiliar.custodiaMadre = ''+valor;
      if(idContexto==="custodiaAbuelos") contextoFamiliar.custodiaAbuelos = ''+valor;
      if(idContexto==="custodiaOtros") contextoFamiliar.custodiaOtros = ''+valor;
      if(idContexto==="personasConvivenSenoFamiliar") contextoFamiliar.personasConvivenSenoFamiliar = ''+valor;
      if(idContexto==="observacionesFamiliares") contextoFamiliar.observacionesFamiliares = ''+valor;
      if(idContexto==="periodo") contextoFamiliar.periodo = ''+valor;
      console.log(contextoFamiliar);
    }


    const sendData = (type) => {
      if(type==="updateContextoEscolar") updateData(type, contextoEscolar);
      if(type==="updateContextoFamiliar") updateData(type, contextoFamiliar);
      if(type==="updateContextoMedico") updateData(type, updateContextoMedico);
      if(type==="updateContextoPersonal") updateData(type, linea);
      if(type==="createAccount") updateData(type, linea);
      if(type==="removeAccount") updateData(type, linea);
      setDataBuilded(false);
    }

    const ContextoPersonal = () => {
      return (
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
                <div className="col-md-12 col-sm-12">
                  <Input placeholder={"Domicilio"} setValue={updateContextoPersonal} type={"text"} idInput={"domicilio"} className={""} value={linea.domicilio} />
                </div>

                <div className="col-md-12 col-sm-12 mt-3" style={{textAlign: 'right'}}>
                <Button text={"Actualizar datos personales"} className={'btn-primary'} onClick={() => sendData('updateContextoPersonal')} />
                <Button text={"Eliminar cuenta"} className={'btn-danger'} onClick={() => sendData('removeAccount')} />
                </div>
        </div>
      )
    }

    const ContextoMedico = () => {
      return (
        <div className="row">
                <div className="col-md-12 col-sm-12">
                  <Input placeholder={"Tratamiento médico"} setValue={updateContextoMedico} type={"text"} idInput={"tratamientoMedico"} className={""} value={contextoMedico.tratamientoMedico} />
                </div>
                <div className="col-md-12" style={{textAlign: 'right'}}>
                  <Button text={'Actualizar Contexto médico'} className={'btn-primary'} onClick={() => sendData('updateContextoMedico')}/>
                </div>

        </div>
      )
    }

    const ContextoFamiliar = () => {
      return (
        <div className="row">
                {contextoFamiliarV1.map( e =>{
                    return (<div className="col-md-4 col-sm-6">
                              <CheckboxText placeholder={e.id} setValue={updateContextoFamiliar} type={"checkbox"} idInput={e.id} className={""} value={e.value}/>
                            </div>)
                })}
                <div className="col-md-12" style={{textAlign: 'right'}}>
                  <Button text={'Actualizar Contexto familiar'} className={'btn-primary'} onClick={() => sendData('updateContextoFamiliar')}/>
                </div>
        </div>
      )
    }

    const ContextoEscolar = () => {
      return (
        <div className="row">
          {contextoEscolarV1.map( e =>{
                      return (<div className="col-md-4 col-sm-6">
                                <CheckboxText placeholder={e.id} setValue={updateContextoEscolar} type={"checkbox"} idInput={e.id} className={""} value={e.value}/>
                              </div>)
          })}
          <div className="col-md-12" style={{textAlign: 'right'}}>
            <Button text={'Actualizar Contexto escolar'} className={'btn-primary'} onClick={() => sendData('updateContextoEscolar')}/>
          </div>
        </div>
      )
    }

    return (
        <ModalPanel info={
            
            linea.id===undefined
              ? <>
              <h4>{'Alta nueva'}</h4> <hr />
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <Input placeholder={"Apellidos"} setValue={updateContextoPersonal} type={"text"} idInput={"apellidos"} className={""} value={linea.apellidos} />
                </div>
                <div className="col-md-6 col-sm-12">
                  <Input placeholder={"Nombre"} setValue={updateContextoPersonal} type={"text"} idInput={"nombre"} className={""} value={linea.nombre} />
                </div>
                <div className="col-3 mt-3">
                  <Select placeholder={'Periodo'} setValue={updateContextoPersonal} idInput={'periodo'} className={''} values={periodos} selected={linea.periodo}/>
                </div>
                <div className="col-md-9 col-sm-9 text-center mt-3 text-right">
                  <Button text={"Crear"} onClick={() => sendData('createAccount')} />
                </div>
              </div>
              </> 
              : <>
            <h4>{linea.nombre}</h4> <hr />
            {
              <TabsPanels titles={['Personal', 'Médico', 'Familiar', 'Escolar']} 
                    contents={[
                      <ContextoPersonal/>,
                      <ContextoMedico/>,
                      <ContextoFamiliar/>,
                      <ContextoEscolar/>
                    ]}
              />
            }

            </>
          } closePanel={closePanel}
        />
      );
}

export default Ficha;