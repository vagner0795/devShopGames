import React from 'react'
import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import { Logo } from '../logo/logo'
import Input from '@/components/input/input'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Input type="text" width="400px" placeholder="Buscar..." />
      <BsCart4 size={40} />
    </nav>
  )
}
