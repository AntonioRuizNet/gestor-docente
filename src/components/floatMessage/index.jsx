import React from 'react'
import {StyledDiv} from './styled';
import { FaExclamationCircle, FaInfoCircle, FaRegCheckCircle } from "react-icons/fa";

export const FloatMessage = ({text, state}) => {

    const setIcon = () => {
        switch (state) {
            case 0:
                return <FaExclamationCircle />
            case 1:
                return <FaRegCheckCircle />
            default:
                return <FaInfoCircle />
        }
    }

    const setStyle = () => {
        switch (state) {
            case 0:
                return {color: 'black'}
            case 1:
                return {color: '#4e73df', backgroundColor: '#fff', border: '1px #4e73df solid'}
            default:
                return {color: 'black'}
        }
    }

    return (<>
            {<StyledDiv style={setStyle()}>{setIcon()} {text}</StyledDiv>}
        </>
    )
}
