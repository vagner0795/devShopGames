import { InputStyles } from './styles'

import React from 'react'

const Input = ({ width, placeholder, ...props }) => {
  return (
    <>
      <InputStyles width={width} placeholder={placeholder} {...props} />
    </>
  )
}

export default Input
