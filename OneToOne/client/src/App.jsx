
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import Home from './Pages/Home';
import UserSave from './Pages/UserSave';
import UserDisplay from './Pages/Display';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/save" element={<UserSave />} />
            <Route path="/display" element={<UserDisplay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App