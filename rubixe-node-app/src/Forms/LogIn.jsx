import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const LogIn = () => {
    let [emailErr, setEmailErr] = useState(null)
    let [passwordErr, SetPasswordErr] = useState(null)
    let [valid, setValid] = useState(false)
  
    let [userDetails, setUserDetails] = useState({
      email: "",
      password: ""
    })
  
    let getData = (event) => {
      setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
    }
  
    useEffect(() => {
      if (valid === true) {
        validateFun(userDetails)
      }
    }, [userDetails])
  
    let submitHandler = (e) => {
      e.preventDefault()
      setValid(true)
      let submit = validateFun(userDetails)
      if (submit === true) {
        alert("Form submitted successfully")
  
      }
    }
    let validateFun = (value) => {
      let email = value.email
      let password = value.password
  
      if (email === "") {
        setEmailErr("please enter email")
      }
      else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)) {
        setEmailErr('Invalid email address')
      }
      else {
        setEmailErr("")
      }
      if (!password) {
        SetPasswordErr("Please enter password")
      }
      if (!/^[A-Z]/.test(password)) {
        SetPasswordErr("Must have atleast 1 capital letter")
      }
      if (!/^(?=.*\d)/.test(password)) {
        SetPasswordErr("Must have atleast 1 number ")
      }
      else if (password.length < 4 || password.length > 10) {
        SetPasswordErr("Password requird min 4 to 10 characters")
      }
      else {
        SetPasswordErr("")
      }
      
      if (emailErr === "" && passwordErr === "") {
        return true
      }
  
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="email" onChange={getData} placeholder='E-mail' />
                            <h6 className="text-danger">{emailErr}</h6>
                        </div>
                        <div className="form-group">
                            <input type="password" autoComplete="true" className="form-control" name="password" onChange={getData} placeholder='Password' />
                            <h6 className="text-danger">{passwordErr}</h6>
                        </div>
                        <input type="submit" value="Log In" className='btn btn-success' />
                    </form>
                </div>
            </div><br />
            <div className="row">
            &nbsp;&nbsp;&nbsp;<h6>Don't have a account ? <Link to="/">Register here</Link> </h6>
            </div>
        </div>
    </>
}

export default LogIn