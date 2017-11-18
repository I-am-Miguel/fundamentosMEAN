let count = 0

function qtd_chamada() {
	return count++
}

module.exports = {qtd_chamada}