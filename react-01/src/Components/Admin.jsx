import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'

const Admin = () => {
  let [products,setProducts] = useState([])
  useEffect(()=>{
    Axios.get("http://127.0.0.1:5000/api/products").then((res)=>{
      setProducts(res.data)
    }).catch(()=>{})
  },[])
  return (
    <>
      <div className="container mt-5">
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
        <div className="col-8">
          <table>
         <thead>

         </thead>
        <tbody>
        {
          products.length > 0 ? <>
            {
                products.map(()=>{
                  return 
                })
            }
          </> : <><h1>No Products are created</h1></>
        }
        </tbody>
        </table>
      </div>
      </div>
        </div>
    </>
  )
}

export default Admin