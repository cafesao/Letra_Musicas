import axios from 'axios'
export { prepararObjeto, apagarInput }

function prepararObjeto(nomeMusica, nomeArtista, lancamento, letra, div) {
    const Musica = {
       nomeMusica,
       nomeArtista,
       lancamento: Number(lancamento),
       letra,
       tags: ''
    }
    prepararTags(nomeMusica, nomeArtista, Musica, div)
}

function prepararTags(nomeMusica, nomeArtista, Musica, div) {
    let musicaTags = nomeMusica.toUpperCase().split(" ")
    let artistaTags = nomeArtista.toUpperCase().split(" ")
    var juntaTudo = musicaTags.concat(artistaTags)

    Musica.tags = juntaTudo
    
    adicionarMusica(Musica, div)
}

function carregando(carregando = true,div) {
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

async function adicionarMusica(Musica, div) {
    try{
        carregando(true, div)
        await axios.post('http://localhost:3001/api/dados', Musica)
        carregando(false, div)
        alert('Sua musica foi carregada')

    }
    catch(error){
        console.warn(error)
    }
}

function apagarInput(nomeMusica,nomeArtista,lancamento,letra) {
    nomeMusica.value = ''
    nomeArtista.value = ''
    lancamento.value = ''
    letra.value = ''
}
