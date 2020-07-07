let valor // não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) // erro !!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atributir undefined 
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // quando esta sem preço
console.log(!!produto.preco)
console.log(produto)