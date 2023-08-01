const express = require('express')
const route = express.Router()
const productsController = require('../controller/Mobiles')

route.get('/',productsController.get)

route.get('/:productId',productsController.getByID)

route.post('/',productsController.add)

route.put('/:productId',productsController.update)

route.delete('/:productId',productsController.delete)

module.exports = route