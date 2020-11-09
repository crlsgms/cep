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

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label> CEP </label>
                    <input type="number" className="form-control" name="cep" onChange={evento => setCep(evento.target.value)} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={chamaAPI}> Chama API </button>
                </div>
                <div>
                    <h3> Logradouro: {resultado.logradouro}</h3>
                    <h3> Bairro: {resultado.bairro}</h3>
                    <h3> Localidade: {resultado.localidade}</h3>
                    <h3> UF: {resultado.uf}</h3>
                </div>
            </form>
        </div>
    )
}