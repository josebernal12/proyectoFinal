import { createTransport } from 'nodemailer'
import twilio from 'twilio'
import Config from '../config/config.js'

const accountside = Config.ACCOUNTSIDE
const authtoken = Config.AUTHTOKEN
const client = twilio(accountside, authtoken)
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
        to: data.email,
        subject: 'Bienvenido',
        html: `Nombre: ${data.name} Edad:${data.age} Telefono: ${data.phone} Email: ${data.email}`
    })
    return response
}


export async function sendMessage(number, nombre) {
    try {

        const message = await client.messages.create({
            to: `whatsapp:+${number}`,
            from: `whatsapp:${Config.NUMBERTWILIO}`,
            body: `nuevo pedido de ${nombre}`
        });
        return message;

    } catch (error) {
        console.log(error);
    }
}