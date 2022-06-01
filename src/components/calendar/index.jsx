import React from 'react';
import { StyledTable } from './styled'
import {Checkbox} from './../checkbox'

export const Calendario = ({data, onClick}) => {

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let dias=[]; for(let d=1; d<32; d++){ dias.push(d); }

    const stateDay = (mes, dia) => {

        let state='';

        if(dia<10) dia = '0'+dia;
        mes = meses.indexOf(mes)+1;
        if(mes<10) mes = '0'+mes;
        let fecha = `2022-${mes}-${dia}`;

        let valor = '';
        let finded = data[0].indexOf(fecha);
        if(finded>0) valor=data[0][4];

        switch (valor) {
            case '0':
                state = {float:'left', border: '0.5px #ededed solid', width: '16.5px', backgroundColor: 'lightgrey'};
                break;
        
            default:
                state = {float:'left', border: '0.5px #ededed solid', width: '16.5px'};
                break;
        }

        return state;
    }

    let cabecera = dias.map( dia => { return <div style={{float:'left', width: '16.5px'}}>{dia}</div>; });
    let calendario = meses.map( mes => {
        let diasMes = dias.map( dia => {
            let backgroundColor = stateDay(mes, dia);
            return <div onClick={() => onClick} style={backgroundColor}>&nbsp;</div>; 
        });
        return <div style={{clear:'both', float:'left'}}><div style={{float:'left', width: '80px'}}>{mes}</div>{diasMes}</div>; 
    });

    return <StyledTable><div style={{fontSize: '12px'}}><div style={{float:'left', width: '80px'}}>&nbsp;</div>{cabecera}{calendario}</div></StyledTable>;
}