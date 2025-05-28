import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"
import Update from "./Pages/Update"
import Search from "./Pages/Search"
import EditData from "./Pages/EditData"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
            <Route path="update" element={<Update />} />
            <Route path="search" element={<Search />} />
            <Route path="editdata/:id" element={<EditData />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App