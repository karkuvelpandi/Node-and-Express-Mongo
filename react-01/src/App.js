import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import CreateProduct from './Components/CreateProduct'
import ListProducts from './Components/ListProducts'
import Admin from './Components/Admin'
const App = () => {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
              <Route path='/CreateProduct' element={<CreateProduct />}/>
              <Route path='/ListProducts' element={<ListProducts />}/>
              <Route path='/Admin' element={<Admin />}/>
            </Routes>
        </Router>
    </>
  )
}

export default App