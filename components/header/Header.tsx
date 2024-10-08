import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/"> Axiata Blog Site</Link> 
    </div>
  )
}

export default Header