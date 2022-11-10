import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {Link,useNavigate}from 'react-router-dom'

const Admin = () => {
let[products,setProducts]= useState({})
let navigate=useNavigate()
useEffect(()=>{
     Axios.get('http://localhost:3000/products')
      .then((response)=>{
      setProducts(response.data)
     })
     .catch(()=>{  })
},[])
let deleteProduct=(id)=>{
        Axios.delete(`http://localhost:3000/products/${id}`)
         .then((response)=>{
          navigate(0)
        })
        .catch(()=>{  })
};

  return <>
     <div className="container">
      <pre>{JSON.stringify(products)}</pre>
      <div className="col-md-7">
        <div className="row mt-5">
          <table className="table table-striped table-dark text-white">
            <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Qty</td>
                  <td>Total</td>
                  <td>Image</td>
                  <td>Modify</td>
                </tr>
            </thead>
            <tbody className='text-white'>
              {
                products.length>0?<>
                {
                  products.map((product)=>{
                  return <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>{(product.qty)*(product.price)}</td>
                    <td><img src={product.image} height="100px" width="100px" alt="no pic" /></td>
                    <td><Link className="btn btn-primary">Edit</Link><Link className="btn btn-danger" onClick={deleteProduct.bind(this,product.id)}>Delete</Link></td>
                  </tr>
                  })
                }
                </>:null
              }

            </tbody>
          </table>
        </div>
      </div>
     </div>
    </>
  
}

export default Admin