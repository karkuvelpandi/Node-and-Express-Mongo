
//create product schema
import mongoose from 'mongoose'
let ProductShema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }

})
let Product = mongoose.model('product', ProductShema)

export default Product