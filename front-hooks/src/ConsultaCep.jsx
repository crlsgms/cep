// vamos usar React Hooks
// vamos utilizar apenas funções e não mais classes
// outra novidade: useState(), que facilita o gerenciamento de estado das variaveis
import React, { useState } from 'react'
// importa dependencia de consulta a api 
import axios from 'axios'

export default function ConsultaCep() {
    // ja utilizando react hooks
    // setCep é o método para alterar cep
    const [cep, setCep] = useState(0) // inicializa cep com 0
    const [resultado, setResultado] = useState({ logradouro: "", bairro: "", localidade: "", uf: "", })
    const [frete, setFrete] = useState({ servico: "", origem: "", destino: "", peso: "", formato: "", comprimento: "", altura: "", largura: "", diametro: "" })
    const [valor, setValor] = useState(0)

    const chamaAPIFrete = () => {
        // chama a API de fretes
        // define a URL
        let url = `http://localhost:3000/frete`
        // faz a requisição enviando as informações do frete
        axios.post(url, frete)
            .then(resp => {
                console.log(`Entrou no frete`)
                console.log(resp.data)
                setValor(resp.data[0].Valor)
            })
    }

    const chamaAPI = () => {
        // chama a API
        // define a URL
        let url = `http://localhost:3000/cep/${cep}` // não precisa mais chamar o this.state.cep
        axios.get(url)
            .then(resp => {
                console.log('Entrou')
                console.log(resp.data) // mostra os valores no console
                setResultado(resp.data)
            })

    }

    const handleChange = (e) => {
        // descobrir o campo que gerou o evento
        const nome = e.target.name
        // descobrimos o valor do campo que gerou o evento
        const valor = e.target.value
        //altera o resultado no frete
        setFrete({ ...frete, [nome]: valor })
    }

    return (
        <div className="container">
            <form>
                <h2> Consulta CEP </h2>
                <div className="form-group">
                    <label> CEP </label>
                    <input type="number" className="form-control" name="cep" onChange={evento => setCep(evento.target.value)} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={chamaAPI}> Chama API </button>
                </div>
                <div className="form-group">
                    <h3> Logradouro: {resultado.logradouro}</h3>
                    <h3> Bairro: {resultado.bairro}</h3>
                    <h3> Localidade: {resultado.localidade}</h3>
                    <h3> UF: {resultado.uf}</h3>
                </div>
                <h2> Consulta Frete </h2>
                <div className="form-group">
                    <label> Código do serviço </label>
                    <input type="number" className="form-control" name="servico" onChange={handleChange} value={frete.servico} />
                </div>
                <div className="form-group">
                    <label> CEP Origem </label>
                    <input type="number" className="form-control" name="origem" onChange={handleChange} value={frete.origem} />
                </div>
                <div className="form-group">
                    <label> CEP Destino </label>
                    <input type="number" className="form-control" name="destino" onChange={handleChange} value={frete.destino} />
                </div>
                <div className="form-group">
                    <label> Peso </label>
                    <input type="number" className="form-control" name="peso" onChange={handleChange} value={frete.peso} />
                </div>
                <div className="form-group">
                    <label> Formato </label>
                    <input type="number" className="form-control" name="formato" onChange={handleChange} value={frete.formato} />
                </div>
                <div className="form-group">
                    <label> Comprimento </label>
                    <input type="number" className="form-control" name="comprimento" onChange={handleChange} value={frete.comprimento} />
                </div>
                <div className="form-group">
                    <label> Altura </label>
                    <input type="number" className="form-control" name="altura" onChange={handleChange} value={frete.altura} />
                </div>
                <div className="form-group">
                    <label> Largura </label>
                    <input type="number" className="form-control" name="largura" onChange={handleChange} value={frete.largura} />
                </div>
                <div className="form-group">
                    <label> Diâmetro </label>
                    <input type="number" className="form-control" name="diametro" onChange={handleChange} value={frete.diametro} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={chamaAPIFrete}> Chama API Frete </button>
                </div>
                <div className="form-group">
                    Valor do Frete: {valor}
                </div>
            </form>
        </div>
    )
}