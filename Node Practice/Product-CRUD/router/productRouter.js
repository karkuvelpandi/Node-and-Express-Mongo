import express from 'express'
import Product from '../model/Product.js'
let router=express.Router()

router.get('/',( request,response)=>{
       response.send('hello router home working...')
})
/*
URL: localhost:8000/product/create
Method:POST
Req fields:name,price,qty
*/
router.post('/create', async(request,response)=>{
    //read data from form / or from postMan
    try{
        let new_product={
            name:request.body.name,
            price:request.body.price,
            qty:request.body.qty
        }
       let product=Product(new_product)
       console.log(product);
       product=  await product.save()
       response.status(200).json({
          result:"Create Successful",
          product:product
       })
    }
    catch(err){
   if(err)throw err
    }

})
// router.put()
// router.delete()



export default router