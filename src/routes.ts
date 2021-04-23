import { Router } from "express";

import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

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


routes.post("/settings", async (request, response) => {
    const {chat, username } = request.body;
    
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

    return response.json(settings);
})

export { routes };