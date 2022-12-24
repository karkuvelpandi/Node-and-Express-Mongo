import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Pages/HomePage/Home'
import Product from './Pages/Products/Products'
import User from './Pages/User/User'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'
import './App.css'
const App = () => {
  return <>
    < Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/user' element={<User />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </Router>

  </>
}

export default App