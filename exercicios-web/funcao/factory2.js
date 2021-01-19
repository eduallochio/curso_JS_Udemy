function criarProduto(nome, marca, preco,){
    return{
        nome,
        marca,
        preco,
        desconto: 0.1
     
    }
}

console.log(criarProduto('Notebook','Samsung',  2199.49))
console.log(criarProduto('Iped','Samsung', 199.49))