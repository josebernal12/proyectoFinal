import { Schema, model } from "mongoose";

const productSchema = Schema({
    name: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    price: {
        type: Number,
        required: [true, 'el precio es obligatorio']
    },
    stock: {
        type: Number,
        required: [true, 'el stock es obligatorio']
    },
    user:{
        type: Schema.ObjectId,
        ref: 'user',
       
    },
  
    cart :{
      type: Schema.ObjectId,
      ref: 'cart'
    },
  

})
// { timestamps: true })

   


export default model('product', productSchema)