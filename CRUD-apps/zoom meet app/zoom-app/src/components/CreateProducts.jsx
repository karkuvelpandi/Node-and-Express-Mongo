import { useState } from "react"
import Axios from 'axios'
// import {Navigate} from "react-router-dom"

let CreateProducts = () => {
    let [product, setProduct] = useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: ""
    })
    
    // let [submitted, setSubmitted]=useState(false)

    let getData = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    let submitHandler = () => {
        let url = "http://localhost:3000/products"
        Axios.post(url, product)
            .then(() => {
            //    setSubmitted(true)
            })
            .catch(() => { })

    }
    let changeImage = (event) => {
        //  console.log(event);
        let imageFile = event.target.files[0]
        let reader = new FileReader(imageFile)
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load", () => {
            // console.log(reader)
            if (reader.result) {
                setProduct({ ...product, image: reader.result })
            }
        })

    }
    return <>
        <pre>{JSON.stringify(product)}</pre>
        {/* <pre>{JSON.stringify(submitted)}</pre> */}
        <h1>Create Product</h1>
        {/* { submitted ? <Navigate to="/productlist"/> : } */}
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-warning">
                            <h1>Create Products</h1>
                        </div>
                        <div className="card-body bg-danger">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text" placeholder="Product Name" name="name" onChange={getData} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="file" placeholder="Image " name="image" onChange={changeImage} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder="Price" name="price" onChange={getData} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder="Qty" name="qty" onChange={getData} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Info" name="info" onChange={getData} className="form-control" />
                                </div>
                                <input type="submit" className="btn btn-success" value="Create Product" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
}

export default CreateProducts