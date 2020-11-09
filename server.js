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
server.get('/cep/:cep', (req,res) => {
    // recuperando o que vem no browser
    let cep = req.params.cep
    correios.consultaCEP({cep: cep})
    .then(resultado => {
        console.log(resultado.data)
        res.send(resultado)
    })
})

//subindo o servidor
server.listen(3000, resposta => {
    console.log(`Servidor de pé na 3000`)
})