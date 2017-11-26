const express = require('express')
const api = express()

api.get('/',function(request,response){
	response.send('<h1>Primeira aula basica de Express</h1>')
})

//all = put or get or post or delete...
api.all('/teste/',function(request,response){
	response.send(`<h1>Rota de Testes! <br>Método: ${request.method}</h1>`)
})

//Identifica todas as rotas que contenham a palavra "api"
api.get(/api/,function(request,response){
	response.send('<h1> expressão regular api </h1>')
})

const port = 3456
api.listen(port, () => console.log('Servidor Ativo, localhost:3456'))