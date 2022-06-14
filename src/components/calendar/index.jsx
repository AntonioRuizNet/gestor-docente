import React, {useState} from 'react';
import { ItemDay } from './styled'
import { Button } from "./../button";
import { Textarea } from "./../textarea";

export const Calendario = ({data, updateDate, idContacto, periodo}) => {

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
        let style = {display: 'inline-flex', border: '0.5px #ededed solid', width: '16.5px', backgroundColor: colorTypes(valor), cursor: 'pointer'};
        return style;
    }

    const colorDayGlosary = (valor) =>{
        let style = { border: '1px #ededed solid', width: '100%', backgroundColor: colorTypes(valor), cursor: 'pointer', textAlign: 'center', color: 'black', marginTop: '2px'};
        return style;
    }

    const Detail = ({obs}) =>{
        return (
            <div style={{position: 'absolute', backgroundColor: '#fff', width: '50%', padding: '20px', left: '25%', margin: 'auto',
                        border: '1px #ccc solid', boxShadow: '0px 0px 7px #9f9f9f', top: '80px', minWdidth: '300px'}}>
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
        let obs = ''; 
        data.map(e=>{ if(e.indexOf(formatDate(mes, dia))>0){ obs = e[5]; } })
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

    let calendario = meses.map( (mes, index) => {
        let counter=0; 

        let nDay = new Date((2018+parseInt(periodo))+'/'+(index<9?'0'+(index+1):(index+1))+'/01');
        let startPosition = nDay.getDay();
        console.log(nDay+' -> '+startPosition);
        let whiteDays = [];
        for (var i = 1; i < startPosition; i++) {
            counter++;
            whiteDays.push(<ItemDay key={'cal-'+mes+'-'+i} onClick={() =>null} style={{display: 'inline-flex', border: '0px', width: '16.5px', cursor: 'pointer'}}>&nbsp;</ItemDay>);
         }

        let diasMes = dias.map( dia => {
            let backgroundColor = colorDay(stateDay(mes, dia));
            counter++;
            if(counter<=7){
                return <ItemDay key={'cal-'+mes+'-'+dia} onClick={() => detailDay(mes, dia)} style={backgroundColor}>{dia}</ItemDay>; 
            } else { counter=0; return <br/> }
        });
        return <div className='col-md-3 col-sm-4 col-xs-6' key={'calmonth-'+mes} style={{display: 'block', marginTop: '15px'}}><div style={{width:'100%'/*float:'left', width: '80px'*/}}>{mes}</div>{whiteDays}{diasMes}</div>; 
    });


    return <>
    {console.log('Render Calendar')}
            <div className='row' style={{fontSize: '12px'}}>{calendario}</div>
            {modalOpen && <Detail state={state} obs={obs}/>}
        </>;
}