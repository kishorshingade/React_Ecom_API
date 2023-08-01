const Products = require('../models/Products')

//GET ALL
exports.get = async (req,res)=>{
    try{
        const data = await Products.find({})
        res.status(200).send(data)
    }catch(err){
        res.status(404).send(err)
    }
}

 //GET SINGLE

 exports.getByID = async (req,res)=>{
    try{
        let id = req.params.productId
        const data = await Products.findById(id)
        res.status(200).send(data)
    }catch(err){
        req.status(404).send(err)
    }
 }

// POST
exports.add = async (req,res)=>{
    try{
        const products = new Products(req.body)
        const data = await products.save()
        res.status(200).send(data)
    }catch(err){
        res.status(400).send(err)
    }
}

//UPDATE

exports.update = async (req,res)=>{
    try{
        let id = req.params.productId
        const data = await Products.findByIdAndUpdate(id,req.body)
        res.status(200).send(data)
    }catch(err){
        res.status(404).send(err)
    }
}

// DELETE
exports.delete = async (req,res)=>{
    try{
        let id = req.params.productId
        const data = await Products.findByIdAndDelete(id)
        res.status(200).send(data)
    }catch(err){
        res.status(404).send(err)
    }
}