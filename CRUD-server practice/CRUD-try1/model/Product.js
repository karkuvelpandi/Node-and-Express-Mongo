import mongoose from "mongoose";

const productSchema = mongoose.Schema

const schema = new productSchema({
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
})

let Product=mongoose.model('products',schema)

export default Product