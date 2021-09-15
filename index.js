const express = require("express")
//estou importando framework(conjunto de funcionalidades de http) express

const app = express()
//atribuindo uma funcao para a varialvel app

app.use(express.json())
//determinando json como formato de dados

const usuario = []
//construindo um array com a finalidade de armazenar os usuários

app.post("/users", (request, response) => {
    const {nome, email, senha} = request.body //aqui eu recebo as informacoes do meu front end
    const novousuario = {nome, email, senha}//aqui eu persisto(tenho nas minhas maos as informacoes) para salvalas no meu vetor

    usuario.push(novousuario)//publicar a variavel dentro do vetor

    return response.json(novousuario)//retorna o usuario criado

})
//estou criando um funcao para criar usuarios

app.listen(3333)
//abriu uma porta para o servidor




