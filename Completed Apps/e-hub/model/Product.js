import mongoose from "mongoose";

const productSchema=mongoose.Schema

const schema= new productSchema({
    name:{
       type:String,
       required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
       type:Number,
       required:true
    },
    info:{
        type:String,
        required:true
    }

})
const Product=mongoose.model("product1",schema)

export default Product