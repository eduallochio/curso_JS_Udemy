// let e const 
{
    var a = 2 
    let b = 3
    console.log(b) // quando uma variavel for declarada como Let dentro de um bloco ela só pode ser acessada dentro do bloco.
}
console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto} é carro!`)


// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [ 1, 2, 3]
console.log(x, y)

const { idade, nome} = {nome: 'Ana',  idade: 9 }
console(i, nome)