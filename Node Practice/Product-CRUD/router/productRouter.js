import express from 'express'
import Product from '../model/Product.js'
const router=express.Router()

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
      
// matching form data with existing database 
       let findProduct= await Product.findOne({name:new_product.name})
      if(findProduct){
        return response.status(401).json({
             msg:"Product Already Exist"
        })
    }

//converting the new_product using modal
    let convertProduct=Product(new_product)  
     console.log(convertProduct);

//saving the converted product into database
      let savedProduct= await convertProduct.save()  

//response for saved product     
      response.status(200).json({
          result:"Create Successful",              
          product:savedProduct
       })
    
    }
    catch(err){
       if(err)throw err
    }

})
// router.put()
// router.delete()
export default router