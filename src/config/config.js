import 'dotenv/config'

const Config = {

    PORT: process.env.PORT,
    MONGO: process.env.MONGO,
    USER: process.env.USER,
    PASS: process.env.PASS,
    SECRETORPRIVATEKEY: process.env.SECRETORPRIVATEKEY,
    HOST: process.env.HOST,
    EMAILPORT: process.env.EMAILPORT,

}


export default Config