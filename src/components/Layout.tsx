import React from 'react'
import Navbar from '@/scenes/navbar'

type Props = {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {

  return (
    <div>
        <Navbar />
        <main > {children} </main>
    </div>
  )
}

export default Layout