const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
           /* DESAFIO*/
// retornar um array apenas com os preços 
/* let resultado = carrinho.map(function(preco){
    return preco 
})

resultado = carrinho.map(preco)
console.log(resultado) */
// TOTALMENTE ERRADO ISSO QUE FIZ

// CORREÇÃO DO DESAFIO
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado =  carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)