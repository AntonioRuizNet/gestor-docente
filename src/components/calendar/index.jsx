import React from 'react';
import { StyledTable } from './styled'
import {Checkbox} from './../checkbox'

export const Calendario = () => {

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let dias=[]; for(let d=1; d<32; d++){ dias.push(d); }

    let disabledDays = [ 
        ['Enero', [1, 2]], 
        ['Febrero', [5, 7]]
    ];

    /*let cabecera = dias.map( dia => { return <th>{dia}</th>; });
    let calendario = meses.map( mes => {
        let diasMes = dias.map( dia => {
            let backgroundColor = {};
            disabledDays.map( e => {if(e[0]==mes && e[1].includes(dia)){ backgroundColor = {backgroundColor: 'lightgrey'} } })
            return <td>{<Checkbox style={backgroundColor} idInput={dia}/>}</td>; 
        });
        return <tr><td>{mes}</td>{diasMes}</tr>; 
    });*/

    let cabecera = dias.map( dia => { return <div style={{float:'left', width: '16.5px'}}>{dia}</div>; });
    let calendario = meses.map( mes => {
        let diasMes = dias.map( dia => {
            return <div style={{float:'left', border: '0.5px #ededed solid', width: '16.5px'}}>&nbsp;</div>; 
        });
        return <div style={{clear:'both', float:'left'}}><div style={{float:'left', width: '80px'}}>{mes}</div>{diasMes}</div>; 
    });

    return <StyledTable><div style={{fontSize: '12px'}}><div style={{float:'left', width: '80px'}}>&nbsp;</div>{cabecera}{calendario}</div></StyledTable>;
}