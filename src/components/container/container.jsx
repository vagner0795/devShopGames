import React from 'react'

import { ContainerMain } from './styles.js'

export function Container({ children }) {
  return (
    <>
      <ContainerMain>{children}</ContainerMain>
    </>
  )
}
