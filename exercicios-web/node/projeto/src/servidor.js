const porta = 3003

const express = require('express')
const app = express()
const bodyParser  = require('body-parser')
const bancoDedados =  require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDedados.getProdutos()) 
})

app.post('./produtos/:id', (req, res, next) => {
    res.send(bancoDedados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JOSON   
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JOSON   
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDedados.excluirProduto(req.params.id)
    res.send(produto) //JOSON   
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})