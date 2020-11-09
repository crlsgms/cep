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

//criando rota para calculo do frete
// utilizamos o post para pegar os dados do form
server.post('/frete', (req, res) => {
    // nCdServico é o tipo de frete 4014 é sedex a vista
    // nCdFormato = 1 é caixa
    console.log('entrou')
    let argumentos = {
        nCdServico: 4014,
        sCepOrigem: 14401295,
        sCepDestino: 14405191,
        nVlPeso: 1,
        nCdFormato: 1,
        nVlComprimento: 30,
        nVlAltura: 30,
        nVlLargura: 30,
        nVlDiametro: 30
    }
    correios.calcPreco(argumentos)
        .then(resposta => {
            console.log(resposta)
            console.log('testando')
            res.send(resposta)
        })
        .catch(error => {​​​​​

            console.log(error)

        }​​​​​) 
})

//subindo o servidor
server.listen(3000, resposta => {
    console.log(`Servidor de pé na 3000`)
})