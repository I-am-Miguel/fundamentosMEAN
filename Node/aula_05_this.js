console.log(global == this)//false
console.log(module === this)//false
console.log(module.exports == this)//true

this.helloWorld = function () {
	console.log('HELLO WORLD')
}