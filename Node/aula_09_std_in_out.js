process.stdout.write("Olá, Node é legal? ")

process.stdin.on('data',function(param){
	
	process.stdout.write(`Sua resposta foi ${param.toString()}Obrigado pela opinião!\n`)
	process.exit()

})