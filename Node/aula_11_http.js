const http = require('http')

const server = http.createServer(function(request,response){

	response.writeHead(200,{"Content-Type":"text/html"})
	response.end("<hi>Ultima aula basica de NODE!</h1>")

})

const port = 3456

server.listen(port, function(){
	console.log(`Servidor Ativo, localhost:${port}`)

})