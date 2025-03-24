const express = require('express')
const cowsay = require('cowsay')

const app = express()

app.get('/', (request, response) => {
    let saying = cowsay.say({text:"I like beef and bacon!"})
    let returnString = saying.split("\n")

     response.send(returnString)
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})