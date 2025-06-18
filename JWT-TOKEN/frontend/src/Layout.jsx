
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
       <Header/>
       <Outlet/>
       <h4 style={{ textAlign: 'center', margin: '20px 0' }}>This is for Footer</h4>
    </>
  )
}

export default Layout