import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Nunito_Sans } from 'next/font/google'
import styles from '../css/layout.module.css'

interface LayoutProps {
  children?: ReactNode
}

const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
})

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${styles.container} ${nunito.className}`}>
      <main className={styles.childrenContainer}>{children}</main>
    </div>
  )
}

export default Layout
