import React from 'react'
import CreateProducts from './components/CreateProducts'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin'
import ProductList from "./components/ProductList"
import Home from './components/Home'


const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/createproduct' element={<CreateProducts/>} />
        <Route path='/productlist' element={<ProductList/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </Router>


  </>
}

export default App