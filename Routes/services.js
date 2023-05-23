const express = require('express')

const router = express.Router();

router.get('/services', (req, res) => {
    res.send({
        type: 'GET'
    })
})

router.put('/services', (req, res) => {
    res.send({
        type: 'PUT'
    })
})

router.post('/services', (req, res)=> {
    res.send({
        type: 'POST'
    })
})
router.delete('/services', (req, res) => {
    res.send({
        type: 'DELETE'
    })
})

module.exports = router;