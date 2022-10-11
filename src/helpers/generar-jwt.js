import jwt from 'jsonwebtoken'

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {

        const payload = { uid }
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err)
                reject('no se pudo generar el token')
            } else {
                resolve(token)
            }
        })


    })

}

// const comprobarJWT = async (token = '') => {

//     try {

//         if (token.length < 10) {
//             return null
//         }

//         const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

//         const usuario = await Usuario.findById(uid)

//         if (usuario) {
//             if (usuario.estado) {
//                 return usuario

//             } else {
//                 return null
//             }
//         } else {
//             return null
//         }



//     } catch (error) {
//         return null
//     }
// }





export {generateJWT}