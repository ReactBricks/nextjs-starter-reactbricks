import React from 'react'

import Header from './header_'
import Footer from './footer_'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
