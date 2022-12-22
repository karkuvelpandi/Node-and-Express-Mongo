import React from 'react'
import './Form.css'
const Form = () => {
  return <>
     <div className="form-container">
      <div className="form-left">
      <h1>GET IN TOUCH</h1>
      <h3 className='h3-text'>Please complete the form and we will get back to you.</h3>
      </div>
      <div className="form-right">
        <label>Name*</label><br />
        <input className='input' type="text" /><br />
        <label>Email*</label><br />
        <input className='input' type="text" /><br />
        <label>Mobile Number*</label><br />
        <input className='input' type="text" />
      </div>
     </div>
  
  </>
}

export default Form