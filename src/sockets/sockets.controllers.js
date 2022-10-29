import { Socket } from 'socket.io'
import messagesModel from '../models/messages.model.js'

const insertMessages = async (message) => {
    const messageCreated = await messagesModel.create(message)
    return messageCreated
}
const getAll = async () => {
    const messages = await messagesModel.find()
    return messages
}
export const socketsController = async (socket = new Socket(), io) => {
    io.emit('server:message', await getAll())

    socket.on('client:message', async message => {
        await insertMessages(message)
        const messages = await getAll()
        // messages.push(message)
        io.emit('server:message', messages)
    })

}
