import React, { useRef, useState } from 'react';
import { StyledInput } from './styled'

export const Input = ({ placeholder, setValue, type, idInput, className, value }) => {

  const refInput = useRef(null);
  const [data, setData] = useState(value);

  const handleInput = () => {
    setData(refInput.current.value);
    setValue(refInput.current.value, idInput);
  }

  return (
    <>
    {placeholder}
    <StyledInput
      placeholder={placeholder}
      className={className}
      ref={refInput}
      id={idInput}
      type={type}
      onChange={handleInput}
      value={data} />
      </>
  )
}

