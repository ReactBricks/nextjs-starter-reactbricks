import Link from 'next/link'
import React from 'react'

import styles from './Header.module.css'

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <div className={styles.headerSubWrapper}>
        <div className={styles.headerView}>
          <img src="/react-bricks-logo.svg" className={styles.image} alt="React Bricks" />
          <div className={styles.groupLink}>
            <Link href="/">
              <a className={styles.coupleLink}>Home</a>
            </Link>
            <Link href="/about-us">
              <a className={styles.coupleLink}>About us</a>
            </Link>
          </div>
        </div>
        <Link href="/admin">
          <a className={styles.singleLink}>Edit content</a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
