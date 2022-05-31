import React, {useState, useEffect} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import ModalPanel from './../../../../components/modalPanel'
import {update_Account} from './../../../../api/requests/contacts'

const Asistencias = ({closePanel, linea, setDataBuilded}) => {
    /*
    	id, idUser, idContacto, fecha, valor
    */
    console.log(linea);

    const [dataReady, setDataReady] = useState(false);
    const [id, setId] = useState("");
    const [fecha, setFecha] = useState("");
    const [valor, setValor] = useState("");

    const checkData = () => {
        const lineaFormated = linea[0];
        if(lineaFormated && lineaFormated.length>0 && !dataLoaded){
          setId(lineaFormated[0])
          setFecha(lineaFormated[3]);
          setValor(lineaFormated[4]);
          setLoaded(true);
        }
    }
    checkData();

    const Calendario = () => {
        let calendario;
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
        let dias = ['1', '2', '3', '4'];
        calendario = meses.map( mes => {
            let diasMes = dias.map( dia => { return `<td>${dia}</td>`; });
            return `<tr><td>${mes}</td>${diasMes}</tr>`;
        });
        return `<table>${calendario}</table>`;
    }

    useEffect( () =>{
        if(dataReady){
          setDataReady(false);
          /*update_Account(
            id,
            fecha,
            valor,
          )*/
          closePanel();
          setDataBuilded(false);
        }
    }, [dataReady]);

    return (
        <ModalPanel info={
            <>
            <h4>Asistencias</h4>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <Input placeholder={"Fecha"} setValue={setNacimiento} type={"date"} idInput={"fecha"} className={""} value={fecha} />
                </div>
                <div className="col-md-8 col-sm-12">
                    <Input placeholder={"Valor"} setValue={setEnfermedades} type={"text"} idInput={"valor"} className={""} value={valor} />
                </div>
                <div className="col-md-12 col-sm-12">
                    <Calendario />
                </div>
    
                <div className="col-md-12 col-sm-12 text-center mt-3">
                    <Button text={"Actualizar"} onClick={() => setDataReady(true)} />
                </div>
            </div>
            </>} closePanel={closePanel}
        />
      );
}

export default Asistencias;