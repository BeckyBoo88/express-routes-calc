// import module
const express = require('express')

 // invoke module/configure express app
 const app = express()
 const PORT = 4000

 // define routes
 app.get('/', (req, res) => {
     res.send("Diamonds are a girl's best friend 💎")
 })

 // ALL REQUESTS: REQ PARAMETERS
 app.get('/add/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x + y}`)
})
 app.get('/subtract/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x - y}`)
})
 app.get('/multiply/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x * y}`)
})
 app.get('/divide/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x / y}`)
})

 // APP listen on a port
 app.listen(PORT, () => {
     console.log("Darkness, my friend, here we are")
 })