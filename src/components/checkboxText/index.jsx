import React, { useRef, useState } from 'react';
import { StyledInput } from './styled'

export const CheckboxText = ({ placeholder, setValue, type, idInput, className, value }) => {
  const refInput = useRef(null);
  const [data, setData] = useState(value);

  const handleInput = () => {
    setData(refInput.current.checked);
    setValue(refInput.current.checked, idInput);
  }

  return (
    <>
      {value==="true"
        ? <StyledInput
        placeholder={placeholder}
        className={className}
        ref={refInput}
        id={idInput+'1'}
        type={type}
        onChange={handleInput}
        defaultChecked="checked"/>

        : <StyledInput
        placeholder={placeholder}
        className={className}
        ref={refInput}
        id={idInput+'2'}
        type={type}
        onChange={handleInput}
        />
      }
      <div style={{display: 'inline'}}>{placeholder}</div>
     </>
    
  )
}

