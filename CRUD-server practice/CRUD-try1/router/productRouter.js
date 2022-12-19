import express, { response } from 'express'
import Product from '../model/Product.js'
const router = express.Router()

/*
URL : http://127.45.12.78/7000/product
method: POST
required fields: name,price,qty
*/
router.get('/', async (request, response) => {
    try {
        let products = await Product.find()
        response.status(200).json(products)
    }
    catch (err) {
        response.status(404).json({
            msg: err.message
        })
    }
})

/*
URL : http://127.45.12.78/7000/product
method: POST
required fields: name,price,qty
*/
router.post('/create', async (request, response) => {
    try {
        let new_product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }
        //matching data with database
        let findProduct = await Product.findOne({ name: new_product.name })
        if (findProduct) {
            return response.status(404).json({
                msg: 'Product already exist...!'
            })
        }

        let createProduct = Product(new_product)
        console.log(createProduct);
        let saveProduct = await createProduct.save()
        response.status(200).json({
            msg: 'product created successfully...',
            product: saveProduct

        })
    }
    catch (err) {
        if (err) throw err
    }
})

/*
URL : http://127.45.12.78/7000/product
method: POST
required fields: name,price,qty
*/
router.put("/:id", (req, resp) => {
    let product_id=req.params.id
    console.log(product_id);
    try{
        let updatedProduct = {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            qty:{
                type:Number,
                required:true
            }
        }
        let product=Product.findById(product_id)
        if(!product){
            return resp.status(401).json({
                msg:"Product not found...!"
            })
        }
    }
    catch(err){
        response.status(401).json({
            msg:err.message
        })
    }
})

export default router