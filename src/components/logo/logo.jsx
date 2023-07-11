import React from 'react'
import Image from 'next/image'
import styles from './logo.module.css'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" width={60} height={60} />
      <h1>DevShopGames</h1>
    </div>
  )
}
