import express from 'express'
import Product from '../model/Product.js'
const router = express.Router()
/*
URL: http://127.11.12.30:8000/product/create
Method:GET
Req fields:NA
*/
router.get('/', async (req, resp) => {
    let product = await Product.find()
    resp.status(200).json(product)
})
/*
URL: http://127.11.12.30:8000/product/:id
Method:GET
Req fields:NA
*/
router.get('/:id', async (req, resp) => {
    let product_Id = req.params.id
    console.log(product_Id);
    try {
        let product = await Product.findById(product_Id)
        if (!product) {
            return resp.status(401).json({
                msg: "Product not available..."
            })
        }
        resp.status(200).json({
            product: product
        })
    }
    catch (err) { }
})

/*
URL: http://127.11.12.30:8000/product/create
Method:POST
Req fields:name,price,qty
*/
router.post('/create', async (request, response) => {
    //read data from form / or from postMan
    try {
        let new_product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }

        // matching form data with existing database 
        let findProduct = await Product.findOne({ name: new_product.name })
        if (findProduct) {
            return response.status(401).json({
                msg: "Product Already Exist"
            })
        }

        //converting the new_product using modal
        let convertProduct = Product(new_product)
        console.log(convertProduct);

        //saving the converted product into database
        let savedProduct = await convertProduct.save()

        //response for saved product     
        response.status(200).json({
            result: "Create Successful",
            product: savedProduct
        })

    }
    catch (err) {
        if (err) throw err
    }

})
/*
URL: http://127.11.12.30:8000/product/:id
Method:PUT
Req fields:name,price,qty
*/

router.put('/:id', async (req, resp) => {
    let product_Id = req.params.id
    try {
        let updateProduct = {
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty
        }
        let product = await Product.findById(product_Id)
        if (!product) {
            resp.status(401).json({
                msg: "product not available"
            })
        }
        product = await Product.findByIdAndUpdate(product_Id, { $set: updateProduct }, { new: true })
        resp.status(200).json({
            result: "Product updated successfully...!",
            product: product
        })
    }
    catch (err) { }
})

/*
URL: http://127.11.12.30:8000/product/:id
Method:DELETE
Req fields:N/A
*/

router.delete('/id', async (req, resp) => {
    let product_Id = req.params.id
    try {
        let product = await Product.findById(product_Id)
        if (!product) {
            resp.status(401).json({
                msg: "product not available"
            })
        }
        product = await Product.findByIdAndDelete(product_Id)
        resp.status(200).json({
            msg: "Product deleted successfully...!"
        })
    }
    catch (err) { }
})
export default router