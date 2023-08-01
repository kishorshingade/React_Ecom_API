const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const productsRoutes = require('./api/routes/products')
const mobilesRoutes = require('./api/routes/mobiles')
const fashionRoutes = require('./api/routes/fashion')
const booksRoutes = require('./api/routes/books')
const cors = require('cors')


//connection to Database
const connectionString = 'mongodb://127.0.0.1:27017/ReactApp'
mongoose.connect(connectionString)
.then(()=>{
    console.log('Connection Established Sucessfull')
})
.catch(()=>{
    console.log('Error to connect')
})

//middlewears
app.use(cors({
    origin: 'http://localhost:6003'
}))
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/products',productsRoutes)
app.use('/books',booksRoutes)
app.use('/fashion',fashionRoutes)
app.use('/mobiles',mobilesRoutes)

module.exports = app