import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const SettingsController = new SettingsController();

routes.post("/settings", SettingsController.create);

export { routes};

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
