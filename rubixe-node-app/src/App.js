import React from 'react'
import RegForm from './Forms/RegForm'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './Forms/LogIn'
const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<RegForm />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </Router>

  </>
}
export default App