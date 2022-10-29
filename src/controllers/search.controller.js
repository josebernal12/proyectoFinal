import categoryModel from '../models/category.model.js'
import mongoose from "mongoose";
import productModel from '../models/product.model.js';
const objectMongo = mongoose.Types.ObjectId

const collectionAllowed = [
    'product',
    'category'
]

const searchCategory = async (termino = '', res) => {
    const esMongoId = objectMongo.isValid(termino)


    if (esMongoId) {
        const response = await categoryModel.findById(termino)
        return res.json({
            results: (response) ? [response] : []
        })

    }
    const regex = new RegExp(termino, 'i')
    const categoryDB = await categoryModel.find({ name: regex })
    res.json({
        results: categoryDB
    })
}
const searchProduct = async (termino = '', res) => {
    const esMongoId = objectMongo.isValid(termino)

    if (esMongoId) {
        const response = await productModel.findById(termino)
        return res.json({
            results: (response) ? [response] : []
        })

    }
    const regex = new RegExp(termino, 'i')
    const productDB = await productModel.find({ name: regex })

    res.json({
        results: productDB
    })
}

const search = (req, res) => {
    const { coleccion, termino } = req.params

    if (!collectionAllowed.includes(coleccion)) {
        return res.status(400).json({
            msg: `las colleciones permitidas son ${collectionAllowed}`

        })
    }
    switch (coleccion) {
        case 'category':
            searchCategory(termino, res)
            break;
        case 'product':
            searchProduct(termino, res)
            break;
        default:
            res.status(500).json({
                msg: 'error'
            })
    }
}

export {
    search
}