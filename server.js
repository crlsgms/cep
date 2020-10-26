// criando servidor HTTP
const express = require('express')
const server = express()

// hardening de segurança
const cors = require('cors')
server.use(cors())

//adicionando dependencias dos correios
let Correios = require('node-correios');
let correios = new Correios();

//criando uma rota GET
server.get('/cep', (req,res) => {
    correios.consultaCEP({cep: '14402303'})
    .then(resultado => {
        console.log(resultado)
        res.send(resultado)
    })
})

//subindo o servidor
server.listen(3000, resposta => {
    console.log(`Servidor de pé na 3000`)
})