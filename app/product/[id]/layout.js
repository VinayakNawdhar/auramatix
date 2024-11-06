import Nav from '@/app/components/Nav'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    {children}
    </>
  )
}

export default Layout