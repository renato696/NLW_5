import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { UsersRepository } from "./repositories/UsersRepository";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };

/**
 * Tipos de parametros:
 * Routes Params = parametros de rotas
 * e.g. https//localhost:333/settings/1
 * 
 * Query Params = parametros de busca
 * e.g. https://localhost:333/settings/1?search=algumaCoisa
 * 
 * Body Params = passa objetos/json dentro das requisições
 * e.g. {
 *  }
 */
