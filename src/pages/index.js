import React from 'react'
import Head from 'next/head'
import NavBar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import { Container } from '@/components/container/container'
import SaleCard from '@/components/cards/card'
import { ContainerSection, ContainerCardPromo, ContainerCard } from '@/styles/styles'
import GameCards from '@/components/gameCards/gameCards'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevShopGames: A sua loja online de games</title>
        <meta name="description" content="DevShopGames: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        <NavBar />
        <Container>
          <ContainerSection>
            <Subtitle>Promoções</Subtitle>
          </ContainerSection>
          <ContainerCardPromo>
            <SaleCard />
            <SaleCard />
            <SaleCard />
          </ContainerCardPromo>
          <ContainerSection>
            <Subtitle>Outros jogos</Subtitle>
            <ContainerCard>
              <GameCards />
              <GameCards />
              <GameCards />
            </ContainerCard>
          </ContainerSection>
        </Container>
      </div>
    </>
  )
}
