const express = require('express')
const api = express()

const port = 3456


api.route('/Metodos')
	.get((req,res) => res.send('Método GET'))
	.post((req,res) => res.send('Método POST'))
	.delete((req,res) => res.send('Método DELETE'))
	.put((req,res) => res.send('Método PUT'))

api.listen(port,() => console.log('Servidor Ativo, localhost:'+port))