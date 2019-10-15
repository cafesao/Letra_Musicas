import axios from 'axios'
export { procurarMusica }
const musica = {}

let div = document.querySelector('div#resultado_buscar')

async function procurarMusica (musicaUser) {
    apagarResultadoDiv()
    carregando(true)

    const musicaAxios = await axios.get(`http://localhost:3001/api/dados/${musicaUser}`)

    carregando(false)
    console.log(musicaAxios.data)
    if (musicaAxios.data.length == 0) {
        alert('Não foi encontrado a sua musica, verifique e tente novamente!')
    }
    else {
        for(let i = 0; i < musicaAxios.data.length; i++) {
            const { nomeMusica, nomeArtista, lancamento, letra } = musicaAxios.data[i]
            musica.Musica = nomeMusica
            musica.Artista = nomeArtista
            musica.Lançamento = lancamento
            musica.Letra = letra

            adicionarResultado()
        }
    }
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

function adicionarResultado() {
    //Titulos
    let tituloMusicaElemento = document.createElement('h2')
    let tituloArtistaElemento = document.createElement('h2')
    let tituloLançamentoElemento = document.createElement('h2')    
    let tituloLetraElemento = document.createElement('h2')
    //Textos
    let musicaElemento = document.createElement('p')
    let artistaElemento = document.createElement('p')
    let lançamentoElemento = document.createElement('p')
    let letraElemento = document.createElement('pre')

    //Div
    let divMusica = document.createElement('div')
    divMusica.setAttribute('id', 'divMusica')
    
    //Titulos
    let tituloMusicaTexto = document.createTextNode('Musica')
    let tituloArtistaTexto = document.createTextNode('Artista')
    let tituloLançamentoTexto = document.createTextNode('Lançamento')
    let tituloLetraTexto = document.createTextNode('Letra')
    //Textos
    let musicaTexto = document.createTextNode(musica.Musica)
    let artistaTexto = document.createTextNode(musica.Artista)
    let lançamentoTexto = document.createTextNode(musica.Lançamento)
    let letraTexto = document.createTextNode(musica.Letra)

    //Titulos
    tituloMusicaElemento.appendChild(tituloMusicaTexto)
    tituloArtistaElemento.appendChild(tituloArtistaTexto)
    tituloLançamentoElemento.appendChild(tituloLançamentoTexto)    
    tituloLetraElemento.appendChild(tituloLetraTexto)
    //Textos
    musicaElemento.appendChild(musicaTexto)
    artistaElemento.appendChild(artistaTexto)
    lançamentoElemento.appendChild(lançamentoTexto)
    letraElemento.appendChild(letraTexto)   
    
    divMusica.appendChild(tituloMusicaElemento) 
    divMusica.appendChild(musicaElemento)  

    divMusica.appendChild(tituloArtistaElemento)
    divMusica.appendChild(artistaElemento)

    divMusica.appendChild(tituloLançamentoElemento) 
    divMusica.appendChild(lançamentoElemento) 

    divMusica.appendChild(tituloLetraElemento)
    divMusica.appendChild(letraElemento)  

    div.appendChild(divMusica)
}

function apagarResultadoDiv() {
    div.innerHTML = ''
}