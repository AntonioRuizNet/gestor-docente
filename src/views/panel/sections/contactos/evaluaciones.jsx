import React, {useState, useEffect} from 'react'
import { Button } from "./../../../../components/button";
import { Input } from "./../../../../components/input";
import ModalPanel from './../../../../components/modalPanel'
import {update_Account, remove_Account} from './../../../../api/requests/contacts'

const Evaluaciones = ({closePanel, linea, setDataBuilded}) => {
    /*
    	id, idUser, idContacto, evaluacion, materia, tipo(unidad/parcial), observaciones, valor
    */
    console.log(linea);
    return null;
}

export default Evaluaciones;