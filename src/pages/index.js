import React from 'react'
import Head from 'next/head'
import NavBar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import { Container } from '@/components/container/container'

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
          <div>
            <Subtitle>Promoções</Subtitle>
          </div>
          <div>
            <Subtitle>Outros jogos</Subtitle>
          </div>
        </Container>
      </div>
    </>
  )
}
