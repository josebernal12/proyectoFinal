const socket = io()

const txtUid = document.querySelector('#txtUid')
const txMsg = document.querySelector('#txMsg')
const formMessage = document.querySelector('#formMessage')
const ulMensajes = document.querySelector('#ulMensajes')


formMessage.addEventListener('submit', event => {
    event.preventDefault()

    const email = txtUid.value
    const question = txMsg.value
    const hours = new Date()
    const fecha = ([hours.getDate(), hours.getMonth(), hours.getFullYear()])
    const time = ([hours.getHours(), hours.getMinutes()])
    const resultado = fecha.join("/")




    socket.emit('client:message', { email, question, time,resultado })
})

socket.on('server:message', data => {
    ulMensajes.innerHTML = ""
    data.forEach(message => {
        ulMensajes.innerHTML += `<h2> <b style= 'color: blue'> ${message.email}: <b style= 'color: red'> ${message.question} </h2> `
    })
})
