import React from 'react'
import InitiativeCard from './InitiativeCard/InitiativeCard'
import Header from './Header/Header'
import WhoWe from './WhoWe/WhoWe'
import History from './History/History'
import Footer from '../../Footer/Footer'
const Home = () => {
  return <>
    <Header/>
    <WhoWe/>
    <History/>
    <InitiativeCard/>
    <Footer/>
  </>
}

export default Home