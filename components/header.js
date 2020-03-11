import Link from 'next/link'
import React from 'react'

import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerMenu}>
        <div className={styles.leftMenu}>
          <div className={styles.logos}>
            <img src="/reactbricks-icon.svg" alt="React Bricks" />
            <img
              src="nextjs.svg"
              style={{ marginLeft: '1rem' }}
              alt="Next.js"
            />
          </div>
          <h1>
            <Link href="/">
              <a>React Bricks + Next.js</a>
            </Link>
          </h1>
        </div>
        <Link href="/admin">
          <a>Admin Dashboard &raquo;</a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
