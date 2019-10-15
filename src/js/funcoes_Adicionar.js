import axios from 'axios'
export { prepararObjeto }

var div  = document.querySelector('div#resultado_adicionar')

function prepararObjeto(nomeMusica, nomeArtista, lancamento, letra) {
    const Musica = {
       nomeMusica,
       nomeArtista,
       lancamento: Number(lancamento),
       letra,
       tags: ''
    }
    prepararTags(nomeMusica, nomeArtista, Musica)
}

function prepararTags(nomeMusica, nomeArtista, Musica) {
    let musicaTags = nomeMusica.toUpperCase().split(" ")
    let artistaTags = nomeArtista.toUpperCase().split(" ")
    var juntaTudo = musicaTags.concat(artistaTags)

    Musica.tags = juntaTudo
    
    adicionarMusica(Musica)
}

function carregando(carregando) {
    if(carregando == true) {
        let carregandoElemento = document.createElement('p')
        let carregandoTexto = document.createTextNode('Carregando...')
        carregandoElemento.setAttribute('id', 'carregando')
        carregandoElemento.appendChild(carregandoTexto)
        div.appendChild(carregandoElemento)
    }
    else {
        document.querySelector('#carregando').remove()
    }
}

async function adicionarMusica(Musica) {
    carregando(true)

    await axios.post('http://localhost:3001/api/dados', Musica)

    carregando(false)
    alert('Sua musica foi carregada')
}