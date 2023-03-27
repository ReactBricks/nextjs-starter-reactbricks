import React, { ReactNode, useContext } from "react"
import { ReactBricksContext } from "react-bricks"

import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkColorMode } = useContext(ReactBricksContext)
  return (
    <div
      className={`${
        isDarkColorMode ? "dark" : "light"
      } flex flex-col h-screen justify-between font-content antialiased`}
    >
      <Header />
      <main className='mb-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
