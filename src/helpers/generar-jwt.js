import jwt from 'jsonwebtoken'

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {

        const payload = { uid }
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '2h'
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

export { generateJWT }