const express = require('express')
const router = express.Router()

router.use((req,res,next) => {
	const tempo_init = Date.now()

	next()

	console.log(`Tempo gasto = ${Date.now()-tempo_init}ms.`);
})

//Ao adicionar o use nos middleware é considerada ordem de precedência estrutural 
router.get('/metodos/:id', (req, res) =>{
	res.json({id: req.params.id,name:'GET',status:'Parametro passado'})
})

router.use((req,res) =>{
	res.json({status:"Parametro não passado"})
})

router.get('/metodos/:id', (req, res) =>{
	res.json({status:"Função nunca chamada"})
})

module.exports = router