import express, { response } from "express";
import { createServer } from "http";
import { Server, Socket} from "socket.io";

import "./database";
import { routes } from "./routes";

const app = express();

const http = createServer(app); //criando o protocolo http
const io = new Server(http); //criando o protocolo WS

app.use(express.json())

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));