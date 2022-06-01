import React, {useState} from 'react';
//import { StyledTable } from './styled'

export const Calendario = ({data, updateDate}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [state, setState] = useState(null);

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let dias=[]; for(let d=1; d<32; d++){ dias.push(d); }

    const formatDate = (mes, dia) => {
        if(dia<10) dia = '0'+dia;
        mes = meses.indexOf(mes)+1;
        if(mes<10) mes = '0'+mes;
        return `2022-${mes}-${dia}`;
    }

    const stateDay = (mes, dia) => {
        let fecha = formatDate(mes, dia);
        let valor = '';
        let finded = data[0].indexOf(fecha);
        if(finded>0) valor=data[0][4];
        return valor;
    }

    const colorDay = (valor) =>{
        let state='';
        switch (valor) {
            case '0':
                state = {float:'left', border: '0.5px #ededed solid', width: '16.5px', backgroundColor: 'lightgrey'};
                break;
            case '1':
                state = {float:'left', border: '0.5px #ededed solid', width: '16.5px', backgroundColor: 'darkgreen'};
                break;
            case '2':
                state = {float:'left', border: '0.5px #ededed solid', width: '16.5px', backgroundColor: 'darkred'};
                break;
            case '3':
                state = {float:'left', border: '0.5px #ededed solid', width: '16.5px', backgroundColor: 'lighblue'};
                break;
        
            default:
                state = {float:'left', border: '0.5px #ededed solid', width: '16.5px'};
                break;
        }
        return state;
    }

    const Detail = ({state}) =>{
        return (
            <div style={{position: 'absolute', backgroundColor: '#fff', width: '40%', padding: '15px', marginLeft: '30%', 
                        marginTop: '11%', border: '1px #ccc solid', boxShadow: '0px 0px 7px #9f9f9f'}}>
                Estados posibles
                <div>
                    <div style={colorDay('0')}>&nbsp;</div>
                    <div style={colorDay('1')}>&nbsp;</div>
                    <div style={colorDay('2')}>&nbsp;</div>
                    <div style={colorDay('3')}>&nbsp;</div>
                </div>
                <div>
                    Estado actual: <div style={colorDay(state)}>&nbsp;</div>
                </div>
                <p onClick={()=>setModalOpen(false)}>Cerrar</p>
            </div>
        )
    }

    const detailDay = (mes, dia) => {
        let fecha = formatDate(mes, dia);
        let idContacto = data[0][2];
        let valor = stateDay(mes, dia);
        setState(valor);
        setModalOpen(true);
        //Modal con los posibles estados
        //Estado actual + obs
        //Boton que llama a updateStateDay(idContacto, fecha, state)
    }

    const updateStateDay = (idContacto, fecha, valor) => {
        console.log(`Actualizando estado del dia: ${idContacto} ${fecha} ${valor}`)
        //updateDate(idContacto, fecha, valor);
    }

    let cabecera = dias.map( dia => { return <div style={{float:'left', width: '16.5px'}}>{dia}</div>; });
    let calendario = meses.map( mes => {
        let diasMes = dias.map( dia => {
            let backgroundColor = colorDay(stateDay(mes, dia));
            return <div onClick={() => detailDay(mes, dia)} style={backgroundColor}>&nbsp;</div>; 
        });
        return <div style={{clear:'both', float:'left'}}><div style={{float:'left', width: '80px'}}>{mes}</div>{diasMes}</div>; 
    });

    return <>
            <div style={{fontSize: '12px'}}><div style={{float:'left', width: '80px'}}>&nbsp;</div>{cabecera}{calendario}</div>
            {modalOpen && <Detail state={state}/>}
        </>;
}