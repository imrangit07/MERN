import {Outlet } from 'react-router-dom'
import Header from './complonents/Header'
import Footer from './complonents/Footer'

const Layout = () => {
  return (
    <>
     <Header />

     <Outlet />

     <Footer />

    </>
  )
}

export default Layout