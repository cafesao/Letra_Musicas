//Importando Modulos
const express = require('express')
const musicControl = require('../controllers/musicControl')
const routes = express.Router()

//Definindo rotas
routes.get('/dados', musicControl.coletarTudo)
routes.get('/dados/:nomeMusica', musicControl.coletar)
routes.post('/dados', musicControl.adicionar)
routes.delete('/dados/:id', musicControl.deletar)

module.exports = routes
