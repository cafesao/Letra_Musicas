//Constantes
const mongo = require('mongoose')
const Music = mongo.model('Music')

//Exportando Modulos
module.exports  = {

    async coletarTudo(req, res) {
        const musica = await Music.find()
        return res.json(musica)
    },

    async coletar(req,res) {
        const nomeMusica = req.params.nomeMusica.toUpperCase().split(' ')
        const musica = await Music.find({"tags": { $all: nomeMusica }})
        return res.json(musica)
    },

    async adicionar(req,res) {
        const musicas = await Music.create(req.body)
        return res.json(musicas)
    },

    async deletar(req,res) {
        await Music.findByIdAndRemove(req.params.id)
        return res.send()
    }
}