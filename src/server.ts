import express, { response } from "express";

import "./database";

const app = express();

/*
* GET = busca
* POST = criação
* PUT = alteração
* DELETE = deletar
* PATCH = alterar alguma informação específica - e.g. alterar senha do usuário
** sempre que utilizar os métodos, vamos usar a mesma estrutura - rota e parametros
** Posso usar a mesma rota no GET e POST? sim, pq estamos usando métodos diferentes.
*/

app.get("/", (request, response) => {
    return response.send("Olá NLW 05");
});

app.post("/", (request, response) => {
    return response.json({ message: "usuário salvo com sucesso!"})
});

app.listen(3333, () => console.log("Server is running on port 3333"));