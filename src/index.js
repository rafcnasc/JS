const express = require('express')

const app = express()

const test = require

const usuarios = []

app.use(express.json())

//route
app.post('/usuarios', (req, res) => {
    const dados = req.body

    const novoUsuario = {
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha
    }

    usuarios.push(novoUsuario)
    return res.status(201).json(novoUsuario)
})


app.get('/usuarios', (req, res) => {
    return res.status(200).json(usuarios)
})

app.listen(3000, () => {
    console.log('servidor inicializado')
})