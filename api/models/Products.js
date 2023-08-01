const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const productSchema = Schema({
    title:String,
    author:String,
    price:Number,
    img:String,
    amount:Number
})
module.exports = mongoose.model('Products',productSchema)