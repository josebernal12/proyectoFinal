import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "el nombre es obligatorio"],
  },
  password: {
    type: String,
    required: [true, "el password es obligatorio"],
  },
  email: {
    type: String,
    // required: [true, "el correo es obligatorio"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "la edad es obligatorio"],
  },
  phone: {
    type: Number,
    // required: [true, "el telefono es obligatorio"],
    // unique: true,
  },
  address: {
    type: String,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    default: "USER_ROLE",
  },
});


export default model("user", userSchema);
