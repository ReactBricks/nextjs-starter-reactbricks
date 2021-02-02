import React from 'react'

import Header from './Header_'
import Footer from './Footer_'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-content antialiased">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
