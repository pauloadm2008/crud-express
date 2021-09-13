const express = require("express")
//estou importando a minha biblioteca

const app = express()
//atribuindo uma funcao para a varialvel app

app.use(express.json())
//determinando json como formato de dados

app.listen(3333)
//abriu uma porta para o servidor

