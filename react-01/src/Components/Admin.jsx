import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'
const Admin = () => {
  let [products, setProducts] = useState([])
  let [remove, setRemove] = useState(false)

  useEffect(() => {
    Axios.get("http://127.0.0.1:5000/api/products").then((res) => {
      setProducts(res.data)
    }).catch(() => { })
  }, [])

  let deleteProduct = (id) => {
    Axios.delete(`http://127.0.0.1:5000/api/products/${id}`)
      .then((resp) => {
        setRemove(true)
      }).catch(() => { })
  };
  return (
    <>
      <div className="container mt-5">
        <pre>{JSON.stringify(products)}</pre>
        <pre>{JSON.stringify(remove)}</pre>
        <div className="row">
          <div className="col-8">
             
{
  remove?<><Navigate to=''/>
  <table className='table table-dark mt-5'>
  <thead >
    <tr>
      <th>Product Name</th>
      <th>Product Price</th>
      <th>Product Qty</th>
      <th>Total Qty</th>
      <th>Image</th>
      <th>Modify</th>
    </tr>
  </thead>
  <tbody>
    {
      products.length > 0 ? <>
        {
          products.map((product) => {
            return <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.qty}</td>
              <td>{(product.qty) * (product.price)}</td>
              <td>{product.image}</td>
              <td><button className='btn btn-success'>Edit</button><button className='btn btn-danger' onClick={deleteProduct.bind(this, product._id)}>Delete</button></td>
            </tr>
          })
        }
      </> : <><h1>No Products are created</h1></>
    }
  </tbody>
</table>
</>:null
}
              
          

          </div>
        </div>
      </div>
    </>
  )
}

export default Admin