import React, { useRef } from 'react';
import { StyledInput } from './styled'

export const Input = ({ placeholder, setValue, type, idInput, className, value }) => {

  const refInput = useRef(null);

  const handleInput = () => {
    setValue(refInput.current.value, idInput);
  }

  return (
    <>
    {placeholder}
    <StyledInput
      placeholder={placeholder}
      className={className}
      ref={refInput}
      type={type}
      onChange={handleInput}
      value={value} />
      </>
  )
}

