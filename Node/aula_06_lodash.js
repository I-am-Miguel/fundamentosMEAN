const _ = require("lodash")

const alunos = [
	{
		nome: 'Welligton',
		nota: 8
	},
	{
		nome: 'Miguel',
		nota: 10
	}
]

const media = _.sumBy(alunos,'nota')/alunos.length

console.log(media)