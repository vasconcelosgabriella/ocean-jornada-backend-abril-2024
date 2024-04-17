const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Exercício: Criar um endpoint [GET] /oi que exibe: "Olá, mundo!"
app.get('/oi', function (req, res) {
    res.send('Olá, mundo!')
})
app.listen(3000)
// Lista de Itens
const Lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']
// Endpoint Read All -> [GET] /item
app.get('/item', function (req, res) {
  res.send(lista)
}
