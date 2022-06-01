import React, {useState} from 'react';
import { ItemDay } from './styled'
import { Button } from "./../button";
import { Textarea } from "./../textarea";

export const Calendario = ({data, updateDate, idContacto}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [state, setState] = useState(null);
    const [fecha, setFecha] = useState(null);
    const [obs, setObs] = useState('');
    let obsTemp = '';

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
        data.map(e=>{ if(e.indexOf(fecha)>0) valor=e[4]; })
        return valor;
    }

    const colorTypes = (valor) =>{
        let background='';
        switch (valor) {
            case '0':
                background = 'white';
                break;
            case '1':
                background = '#23b723';
                break;
            case '2':
                background = '#8b00006b';
                break;
            case '3':
                background = '#f7eb48';
                break;
        
            default:
                break;
        }
        return background;
    }

    const colorDay = (valor) =>{
        let style = {float:'left', border: '0.5px #ededed solid', width: '16.5px', backgroundColor: colorTypes(valor), cursor: 'pointer'};
        return style;
    }

    const colorDayGlosary = (valor) =>{
        let style = { border: '1px #ededed solid', width: '100%', backgroundColor: colorTypes(valor), cursor: 'pointer', textAlign: 'center', color: 'black', marginTop: '2px'};
        return style;
    }

    const Detail = ({obs}) =>{
        return (
            <div style={{position: 'absolute', backgroundColor: '#fff', width: '40%', padding: '20px', marginLeft: '30%', 
                        border: '1px #ccc solid', boxShadow: '0px 0px 7px #9f9f9f', marginTop: '-10%'}}>
                <div className="row"><div className="text-center">Selecciona el tipo de falta</div></div>
                <div className="row">
                    <div onClick={()=>updateStateDay(0)} style={colorDayGlosary('0')}>Eliminar falta</div>
                    <div onClick={()=>updateStateDay(1)} style={colorDayGlosary('1')}>Justificada</div>
                    <div onClick={()=>updateStateDay(2)} style={colorDayGlosary('2')}>Injustificada</div>
                    <div onClick={()=>updateStateDay(3)} style={colorDayGlosary('3')}>Retraso</div>
                </div>
                <div className="row mt-3">
                    <div className="text-center">Observaciones</div>
                    <p>{obs}</p>
                    <Textarea setValue={saveObs} idInput={'asist-detail-obs'} className={''}/>
                </div>
                <div className="row">
                    <Button className={'col-12 btn-primary'} text={'Guardar observaciones'} onClick={()=>updateObs()} />
                    <Button className={'col-12 mt-2'} text={'Cerrar'} onClick={()=>setModalOpen(false)} />
                </div>
                
            </div>
        )
    }

    const detailDay = (mes, dia) => {
        let obs = ''; let idContacto = '';
        data.map(e=>{ if(e.indexOf(formatDate(mes, dia))>0){ obs = e[5]; idContacto = e[2];} })
        setObs(obs);
        setFecha(formatDate(mes, dia));
        setState(stateDay(mes, dia));
        setModalOpen(true);
    }

    const saveObs = (value) => {
        obsTemp = value;
    }

    const updateObs = () => {
        console.log(`Actualizando estado del dia: ${idContacto} ${fecha} ${state} ${obsTemp}`)
        updateDate(idContacto, fecha, state, obsTemp);
        setModalOpen(false);
    }

    const updateStateDay = (newState) => {
        setState(newState);
        console.log(`Actualizando estado del dia: ${idContacto} ${fecha} ${newState} ${obs}`)
        updateDate(idContacto, fecha, newState, obs);
        setModalOpen(false);
    }

    let cabecera = dias.map( dia => { return <div key={'calheader-'+dia} style={{float:'left', width: '16.5px'}}>{dia}</div>; });
    let calendario = meses.map( mes => {
        let diasMes = dias.map( dia => {
            let backgroundColor = colorDay(stateDay(mes, dia));
            return <ItemDay key={'cal-'+mes+'-'+dia} onClick={() => detailDay(mes, dia)} style={backgroundColor}>&nbsp;</ItemDay>; 
        });
        return <div key={'calmonth-'+mes} style={{clear:'both', float:'left'}}><div style={{float:'left', width: '80px'}}>{mes}</div>{diasMes}</div>; 
    });

    return <>
    {console.log('Render Calendar')}
            <div style={{fontSize: '12px'}}><div style={{float:'left', width: '80px'}}>&nbsp;</div>{cabecera}{calendario}</div>
            {modalOpen && <Detail state={state} obs={obs}/>}
        </>;
}