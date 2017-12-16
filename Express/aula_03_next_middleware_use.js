const express = require('express')
const api = express()
//Use acessa a rota que baseada no regex informado
api.use('/api',function(request,response,next){
	console.log('iniciando 1° middleware com .USE');
	next()
	console.log('finalizando o 1° middleware com .USE');
})

api.use('/api',function(request,response){
	response.send('<h1>3ª Aula de Express<br>Conhecendo o middleware com .USE</h1>')
})



const port = 3456
api.listen(port, () => console.log('Servidor Ativo, localhost:3456'))