import React from 'react';
import {StyledButton} from './styled'

export const Button = ({text, onClick, className}) => {
  return (
    <StyledButton className={className} onClick={onClick}>{text}</StyledButton>
  )
}

