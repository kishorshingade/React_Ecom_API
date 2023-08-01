const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const booksSchema = Schema({
    title:String,
    author:String,
    price:Number,
    img:String,
    amount:Number
})
module.exports = mongoose.model('Books',booksSchema)