import express from 'express'
import Product from '../model/Product.js'
const router=express.Router()

router.get('/',(request,response)=>{
       response.send("Getting all products")
})
/*
URL : http://127.45.12.78/7000/product
method: POST
required fields: name,price,qty
*/
router.post('/create',async(request,response)=>{
  try{ 
    let new_product={
        name:request.body.name,
        price:request.body.price,
        qty:request.body.qty
     }
     //matching data with database
      let findProduct=await Product.findOne({name:new_product.name})
      if(findProduct){
        return response.status(404).json({
        msg:'Product already exist...!'
      })
      }

    let createProduct=Product(new_product)
    console.log(createProduct);
    let saveProduct=await createProduct.save()
    response.status(200).json({
        msg:'product created successfully...',
        product:saveProduct
        
    })
}
catch(err){
     if(err)throw err
}
})

export default router