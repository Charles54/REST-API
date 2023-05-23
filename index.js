const express = require('express')
const app = express()
const port = 7000
const productRoute = require('./Routes/products')
const usersRoute = require('./Routes/users')
const servicesRoute = require('./Routes/services')

app.use('/api', productRoute)
app.use('/api', usersRoute)
app.use('/api', servicesRoute)

app.get('/api',(req,res)=> {
res.send('server running')
} )

// app.get('/api/user',(req,res)=> {
//     res.send('This is the user page')
//     } )

// app.get('/api/products', (request, response) => {response.send('This is the Product Page')})

// app.get(('/api/services'), (request, response) =>{
//     response.send('This is the product page')
// })

app.listen(port, ()=>{
    console.log('Server running')
})