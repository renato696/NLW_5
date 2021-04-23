import express, { response } from "express";

import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.send("Olá NLW 05");
});

app.post("/", (request, response) => {
    return response.json({ message: "usuário salvo com sucesso!"})
});

app.listen(3333, () => console.log("Server is running on port 3333"));