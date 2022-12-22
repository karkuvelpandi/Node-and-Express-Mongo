import React from 'react'
import './InitiativeCard.css'
const InitiativeCard = () => {
  return<>
  <div className="card-div">
    <div><h1>TECH FOR TEENS -A RUBIXE @ INITIATIVE</h1></div>
    <div className='card-content'> 
      <div className='card-1'>
        <div className="card-head radius-top" style={{backgroundColor:'#1d2d60'}}></div>
        <div className="card-body"></div>
        <div className="card-tail"></div>
      </div>
      <div className='card-2'>
        <div className="card-tail"></div>
        <div className="card-body"></div>
      <div className="card-head radius-bottom card-head-down" style={{backgroundColor:'#9d2057'}}></div>
      </div>
      <div className='card-1'>
      <div className="card-head radius-top" style={{backgroundColor:'#e35e13'}}></div>
        <div className="card-body"></div>
        <div className="card-tail"></div>
      </div>
      <div className='card-2'>
      <div className="card-tail"></div>
        <div className="card-body"></div>
      <div className="card-head radius-bottom card-head-down" style={{backgroundColor:'#195b37'}}></div>
      </div>
      <div className='card-1'>
      <div className="card-head radius-top"style={{backgroundColor:'#b77d33'}}></div>
        <div className="card-body"></div>
        <div className="card-tail"></div>
      </div>
    </div>
  </div>
  </>
}

export default InitiativeCard