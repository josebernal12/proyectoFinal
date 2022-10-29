const socket = io()

const txtUid = document.querySelector('#txtUid')
const txMsg = document.querySelector('#txMsg')
const formMessage = document.querySelector('#formMessage')
const ulMensajes = document.querySelector('#ulMensajes')


formMessage.addEventListener('submit', event => {
    event.preventDefault()

    const email = txtUid.value
    const question = txMsg.value


    socket.emit('client:message', { email, question })
})

socket.on('server:message', data => {
    ulMensajes.innerHTML = ""
    console.log(data)
    data.forEach(message => { 
        ulMensajes.innerHTML += `<h2> <b style= 'color: blue'> ${message.email}: <b style= 'color: red'> ${message.question} </h2> <a href ="/templates/chat/response" class="btn btn-primary">Ver Respuesta</a>`
    })
})
