const mongo = require('mongoose')

const MusicSchema = new mongo.Schema({
    nomeMusica: {
        type: String,
        required: true
    },
    nomeArtista: {
        type: String,
        required: true
    }, 
    lancamento: {
        type: Number,
        required: true
    }, 
    letra: {
        type: String,
        required: true
    }, 
    registro: {
        type: Date,
        default: Date.now
    },
    tags : {
        type: Array,
        required: true
    }
})

mongo.model('Music', MusicSchema)