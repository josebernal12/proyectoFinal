import { createTransport } from 'nodemailer'
import Config from '../config/config.js'

export const transport = createTransport({
    host: Config.HOST,
    port: Config.EMAILPORT,
    auth: {
        user: Config.USER,
        pass: Config.PASS
    }
});

export const sendEmail = async (data) => {
    const response = await transport.sendMail({
        from: 'Registro',
        to: Config.USER,
        subject: 'nuevo usuario registrado',
        html: `Nombre: ${data.name} Edad:${data.age} Telefono: ${data.phone} Email: ${data.email}`
    })
    return response
}