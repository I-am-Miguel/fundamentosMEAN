const express = require('express')
const api = express()

const router = require('./aula_05_routers')

api.use('/api',router)

const port = 3456
api.listen(port, () => console.log('Servidor Ativo, localhost:'+port))