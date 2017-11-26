// console.log(process.argv) // Lista os argumentos passados por parâmetro ao executar o arquivo

function find_param(param) {
	return process.argv.indexOf(param) != -1
}


if (find_param("Miguel")) {
	console.log("Possui Miguel!")
}else{
	console.log("Não possui Miguel")
}