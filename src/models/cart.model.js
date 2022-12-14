import { Schema, model } from "mongoose";


const cartSchema = Schema({

    email: {
        type: String,
        // required: [true, 'el email es requerido']
    },
    order: [{
        product: {
            type: Schema.ObjectId,
            ref: 'product'
        },
        stock: Number
    }],



})

export default model('cart', cartSchema)