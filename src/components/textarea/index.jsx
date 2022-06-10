import React, { useRef, useState } from 'react';
import { StyledTextarea } from './styled'

export const Textarea = ({ placeholder, setValue, idInput, className, value }) => {

  const refInput = useRef(null);
  const [data, setData] = useState(value);

  const handleInput = () => {
    setData(refInput.current.value);
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
      value={data} />
      </>
  )
}

