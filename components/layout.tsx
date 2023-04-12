import React, { ReactNode } from 'react'
import styles from '../css/layout.module.css'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`${styles.container}`}
    >
      <main className={styles.childrenContainer}>{children}</main>
    </div>
  )
}

export default Layout
