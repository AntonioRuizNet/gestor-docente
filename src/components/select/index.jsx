import React, { useRef } from 'react';
import { StyledSelect } from './styled'

export const Select = ({ setValue, idInput, className, placeholder, values, disabled, selected }) => {
    const refSelect = useRef(null);

    const handleSelect = () => {
        setValue(refSelect.current.value, idInput);
    }
    
    const currentYear = () => {
        if(selected===""){
            const currentDate = new Date();
            const currentAndNext = currentDate.getFullYear()+"-"+(currentDate.getFullYear()+1);
            selected = values.filter(option => {
                return option.nombre===currentAndNext;
            })[0]?.id;
        }
    }
    currentYear();

    return (
        <>{placeholder}
        <StyledSelect
            id={idInput}
            className={className}
            ref={refSelect}
            disabled={disabled ? 'disabled' : ''}
            onChange={handleSelect} 
            value={selected}>
            {values.map(option => {
                return <option key={option.id} value={option.id} >{option.nombre}</option>
            })}
        </StyledSelect>
        </>
    )
}