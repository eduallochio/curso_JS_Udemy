// closeure é o escopo criado quando  uma funcção é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à funcção

// Contesto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
