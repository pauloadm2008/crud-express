const express = require("express");
const { v4 } = require("uuid")

const app = express();

app.use(express.json())



const usuarios = []

//http://localhost:3333/users
app.post('/users', (request, response) => {
//aqui eu recebo os dados do front-end
  const {name, lastname, phone, sexo} = request.body;
//aqui eu armazeno os dados recebidos em uma variavel
  const usuario = { id: v4(), name, lastname, phone, sexo}

//eu publico os dados da variavel dentro do meu vetor/banco de dados
usuarios.push(usuario)

return response.json(usuario)
})



app.listen(3333)  //  http://localhost:3333