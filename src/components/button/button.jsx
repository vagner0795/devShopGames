import React from 'react'
import { ButtonStyles } from './styles'

const Button = ({ children, width }) => {
  return <ButtonStyles width={width}>{children}</ButtonStyles>
}

export default Button
