import { Schema, model, } from 'mongoose'

const categorySchema = new Schema({
    name: { type: String },
    product: { type: Schema.ObjectId, ref: 'product' }
},
    { timestamps: true }
)

export default model('category', categorySchema)