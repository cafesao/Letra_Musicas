//Importando modulos
const express = require('express')
const cors = require('cors')
const mongo = require('mongoose')
const requireDir = require('require-dir')

//Iniciando App
const app = express()
app.use(express.json())
app.use(cors())


mongo.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true })
requireDir('../models/')

app.use('/api', require('../routes/routes'))

//Adicionando caminho para a API
app.listen(3001)