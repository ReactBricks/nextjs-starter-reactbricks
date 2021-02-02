import React from 'react'

import Header from './Header'
import Footer from './Footer'

import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.children}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
