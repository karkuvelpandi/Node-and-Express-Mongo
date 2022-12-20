import express, { response } from 'express'
import Product from '../model/Product.js'
const router = express.Router()

/*
URL : http://127.45.12.78/7000/product
method: GET
required fields: NO
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
URL : http://127.45.12.78/7000/product/create
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
URL : http://127.45.12.78/7000/product/update/:id
method: PUT
required fields: name,price,qty
*/
router.put("/update/:id", async(req, resp) => {
    let product_id=req.params.id
    console.log(product_id);
    try{
        let updatedProduct = {
           name: req.body.name,
           price:req.body.price,
           qty:req.body.qty
        }
        let product=Product.findById(product_id)
        if(!product){
            return resp.status(401).json({msg:"No product found..."})
        }
        product= await Product.findByIdAndUpdate(product_id,{ $set: updatedProduct},{new:true})
        resp.status(200).json({
            result:"Product updated successfully...",
            product:product
        })
    }
    catch(err){
        response.status(401).json({
            msg:err.message
        })
    }
})
/*
URL : http://127.45.12.78/7000/product/delete/:id
method: DELETE
required fields: name,price,qty
*/

router.delete('/delete/:id',async(req,resp)=>{
       let product_Id=req.params.id
       try{
        let product=  Product.findById(product_Id)
        if(!product){
            return resp.status(401).json({
                result:'no product'
            })
        }
        product=await Product.findByIdAndDelete(product_Id)
        resp.status(200).json({
            result:"Product deleted successfully...",
            product:product
        })
       }
       catch(err){if(err)throw err}
})
/*
URL : http://127.45.12.78/7000/product/:id
method: GET
required fields: name,price,qty
*/
router.get('/:id',async(req,resp)=>{
    let product_Id=req.params.id
    try{
     let product=  Product.findById(product_Id)
     if(!product){
         return resp.status(401).json({
             result:'no product'
         })
     }
     product=await Product.findById(product_Id)
     resp.status(200).json(product)
    }
    catch(err){if(err)throw err}
})

export default router