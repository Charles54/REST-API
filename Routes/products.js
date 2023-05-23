const express = require('express')

const router = express.Router()

router.get('/products', (req, res)=>{res.send({
    type:'GET',
})})

router.post("/products", (req, res)=>{res.send({
    type:'POST',
})})

router.put("/products/:id", (req, res)=>{res.send({
    type:'PUT',
})})

router.delete("/products/:id", (req, res)=>{res.send({
    type:'DELETE',
})})

module.exports = router;