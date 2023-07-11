import React from 'react'
import Head from 'next/head'
import NavBar from '@/components/navbar/navbar'

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
      </div>
    </>
  )
}
