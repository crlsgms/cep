# cep
Projeto react para consumo api correios

usando api do npmjs
https://www.npmjs.com/package/node-correios

// ambiente base de desenvolvimento
npm install node-correios express nodemon cors


## servidor local
mudei no package.json pra chamaro nodemon direto:
 "start": "nodemon server.js" 

 pra chamara aplicação precisa por 3000/cep (server.get)


#criando o front com hooks
create-react-app front-hooks

className="form-control" name="cep" onChange={setCep(e.target.value)}/>

ou

className="form-control" name="cep" onChange={evento => setCep(evento.target.value)}/>


descobrir como por outra porta que nao a 3000 pro react