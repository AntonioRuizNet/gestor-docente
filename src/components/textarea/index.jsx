import React, { useRef } from 'react';
import { StyledTextarea } from './styled'

export const Textarea = ({ placeholder, setValue, idInput, className, value }) => {

  const refInput = useRef(null);

  const handleInput = () => {
    setValue(refInput.current.value, idInput);
  }

  return (
    <>
    {placeholder}
    <StyledTextarea
      placeholder={placeholder}
      className={className}
      ref={refInput}
      onChange={handleInput}
      value={value} />
      </>
  )
}

