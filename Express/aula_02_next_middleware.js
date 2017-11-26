const express = require('express')
const api = express()

api.get('/',function(request,response,next){
	console.log('iniciando 1° middleware');
	next()
	console.log('finalizando o 1° middleware');
})

api.get('/',function(request,response){
	response.send('<h1>2ª Aula de Express<br>Conhecendo o middleware</h1>')
})



const port = 3456
api.listen(port, () => console.log('Servidor Ativo, localhost:3456'))