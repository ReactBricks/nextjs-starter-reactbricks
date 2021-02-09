import Link from 'next/link'
import React from 'react'

import styles from './Header.module.css'

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.logoMenuWrapper}>
          <img src="/react-bricks-logo.svg" className={styles.logo} alt="React Bricks" />
          <div className={styles.headerMenu}>
            <Link href="/">
              <a className={styles.menuLink}>Home</a>
            </Link>
          </div>
        </div>
        <Link href="/admin">
          <a className={styles.callToAction}>Edit content</a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
