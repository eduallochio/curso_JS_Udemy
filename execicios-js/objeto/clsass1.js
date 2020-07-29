class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
    this.valor = valor
    }
    
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...Lancamentos) {
        Lancamentos.forEach(l =>  this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0 
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeluz =  new Lancamento('Luz', -220)
/*
const contaDeInternet =  new Lancamento('Internet', -288.15)
const recebimentos = new Lancamento('Recebidos', 150) 
teste para ver o calculo da class 
*/

const contas = new CicloFinanceiro(6,2021)
contas.addLancamentos(salario, contaDeluz, contaDeInternet, recebimentos)
console.log(contas.sumario())
