import React from 'react'
import Navbar from '@/scenes/navbar'

type Props = {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {

  return (
    <div>
        <Navbar isTopOfPage={false} />
        <main> {children} </main>
    </div>
  )
}

export default Layout