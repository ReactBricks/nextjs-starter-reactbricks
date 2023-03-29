import React, { ReactNode, useContext } from "react"
import { ReactBricksContext } from "react-bricks"
import styles from "../css/layout.module.css"

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkColorMode } = useContext(ReactBricksContext)
  return (
    <div
      className={`${isDarkColorMode ? "dark" : "light"} ${styles.container}`}
    >
      <main className={styles.childrenContainer}>{children}</main>
    </div>
  )
}

export default Layout
