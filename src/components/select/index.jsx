import React, { useRef } from 'react';
import { StyledSelect } from './styled'

export const Select = ({ setValue, idInput, className, placeholder, values, disabled, selected }) => {
    const refSelect = useRef(null);

    const handleSelect = () => {
        setValue(refSelect.current.value, idInput);
    }

    return (
        <>{placeholder}
        <StyledSelect
            id={idInput}
            className={className}
            ref={refSelect}
            disabled={disabled ? 'disabled' : ''}
            onChange={handleSelect} >
            {values.map(option => {
                let optSelected = option.id===selected? 'selected': '';
                return <option key={option.id} value={option.id} selected={optSelected}>{option.nombre}</option>
            })}
        </StyledSelect>
        </>
    )
}