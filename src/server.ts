import express, { response } from "express";
import { createServer } from "http";
import { Server, Socket} from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

const http = createServer(app); //criando o protocolo http
const io = new Server(http); //criando o protocolo WS

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id);
})

app.use(express.json())

app.use(routes);

http.listen(3333, () => console.log("Server is running on port 3333"));