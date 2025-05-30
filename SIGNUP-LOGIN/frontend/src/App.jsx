
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'

import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='register' element={<Register/>} />
    </Route>
   </Routes>

   <Routes>
    <Route path='dashboard' element={<Dashboard/>} />

   </Routes>
   </BrowserRouter>
  )
}

export default App