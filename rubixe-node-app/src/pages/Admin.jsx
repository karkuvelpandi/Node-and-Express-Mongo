import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import {Link,} from 'react-router-dom'
const Admin = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
         fetchData()
    },[])
    let fetchData=()=>{
        Axios.get("http://127.12.22.32:8000/user/")
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    let deleteHandler=(userId)=>{
        let url=`http://127.12.22.32:8000/user/${userId}`
        Axios.delete(url)
        .then(()=>{
             console.log("User detail deleted successfully...");
             fetchData()
        })
        .catch((err)=>{
             console.log(err)
        })
    }
    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <table className='table table-dark text-white text-center'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Description</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                             {
                                users.map((user)=>{
                                  return <tr key={user._id}>
                                      <td>{(user._id).slice(20,24)}</td>
                                      <td>{user.name}</td>
                                      <td>{user.mobile}</td>
                                      <td>{user.email}</td>
                                      <td>{user.password}</td>
                                      <td>{user.state}</td>
                                      <td>{user.city}</td>
                                      <td>{user.description}</td>
                                      <td><img src={user.image} height="70px" alt="" /></td>
                                      <td>
                                        <Link to={`/edit/${user._id}`}>Edit</Link>
                                        <Link onClick={deleteHandler.bind(this,user._id)}>Delete</Link>
                                      </td>
                                  </tr>
                                })
                             }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Admin