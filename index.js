require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('We did it!')
    res.send('Home Page')
})

app.listen(3000)