import Config from '../config/config.js'
import mongoose from 'mongoose'

const dbConnection = async () => {
    try {
        await mongoose.connect(Config.MONGO)
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(error)
    }

}

export {dbConnection}