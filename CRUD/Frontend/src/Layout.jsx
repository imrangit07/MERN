import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

Outlet

const Layout = () => {
  return (
   <>
   <Navbar/>

   <Outlet/>

   <Footer />
   </>
  )
}

export default Layout