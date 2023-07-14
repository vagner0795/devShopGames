import React from 'react'
import Image from 'next/image'

import { CardContainer, Info, Title, PriceCard, Percent, Price, NewPrice, OldPrice } from './styles'
import Button from '../button/button'

const SaleCard = () => {
  return (
    <CardContainer>
      <Image src="/products/forza4.jpg" width={250} height={300} />
      <Info>
        <Title>Oferta Exclusiva</Title>
        <PriceCard>
          <Percent>-20%</Percent>
          <Price>
            <OldPrice>R$99,90</OldPrice>
            <NewPrice>R$79,90</NewPrice>
          </Price>
        </PriceCard>
        <Button>Adicionar ao carrinho</Button>
      </Info>
    </CardContainer>
  )
}

export default SaleCard
