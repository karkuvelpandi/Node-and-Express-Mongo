import React from 'react'
import Navbar from './Navbar/Navbar'
import CreateProduct from './Components/CreateProduct'
import Products from './Components/Products'
import Admin from './Components/Admin'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/createproduct' element={<CreateProduct />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/admin' element={<Admin />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App