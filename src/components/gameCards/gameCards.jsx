import React from 'react'
import Image from 'next/image'

import { ContainerCardGame, Info, Title, Details, ContainerPrice, Price } from './styles'
import Button from '../button/button'

const GameCards = () => {
  return (
    <>
      <ContainerCardGame>
        <Image src="/products/kof15.webp" alt="Game image" width={300} height={145} />
        <Info>
          <Title>The king of fighter</Title>
          <Details>Ação, Luta, Multijogador.</Details>
          <ContainerPrice>
            <Price>R$99,90</Price>
            <Button width="250px">Adicionar ao carrinho</Button>
          </ContainerPrice>
        </Info>
      </ContainerCardGame>
    </>
  )
}

export default GameCards
