import React, { useRef } from 'react';
import { StyledCheck } from './styled'

export const Checkbox = ({ setValue, idInput, style, value }) => {

  const refInput = useRef(null);

  const handleInput = () => {
    setValue(refInput.current.value, idInput);
  }

  return (
    <>
    <StyledCheck
      style={style}
      ref={refInput}
      onChange={handleInput}
      value={value} />
      </>
  )
}