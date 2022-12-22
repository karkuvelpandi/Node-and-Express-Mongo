import React from 'react'
import RegForm from './Forms/RegForm'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LogIn from './Forms/LogIn'
const App = () => {
  return <>
 <Router>
<Routes>
  <Route path='/' element={<RegForm/>}/>
  <Route path='/login' element={<LogIn/>}/>
</Routes>
 </Router>
 
  </>
}
export default App