import React, { ReactNode, useContext, useEffect, useState } from "react"
import styles from "../css/layout.module.css"
import { ReactBricksContext } from "react-bricks"

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const { isDarkColorMode } = useContext(ReactBricksContext)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`${isDarkColorMode ? "dark" : "light"} ${styles.container}`}>
      <main className={styles.childrenContainer}>{children}</main>
    </div>
  )
}

export default Layout
