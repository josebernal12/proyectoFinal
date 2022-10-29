import { Schema, model } from "mongoose";

const messagesSchema = new Schema({
    email: { type: String },
    question: { type: String },
    response: { type: String },
    message: { type: String }

})

export default model('message', messagesSchema)
// { timestamps: true })




