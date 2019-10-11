import axios from 'axios'
export { procurarMusica, apagarResultadoDiv, apagarResultadoInput }
const musica = {}

async function procurarMusica (div, musicaUser) {
    try{
        carregando(true,div)

        const musicaAxios = await axios.get(`http://localhost:3001/api/dados/${musicaUser}`)
        const { nomeMusica, nomeArtista, lancamento, letra } = musicaAxios.data[0]
        musica.Musica = nomeMusica
        musica.Artista = nomeArtista
        musica.Lançamento = lancamento
        musica.Letra = letra

        

        carregando(false,div)
        if (musica.Musica == '') {
            alert('Não foi encontrado a sua musica, verifique e tente novamente!')
        }
        else {
            adicionarResultado(div)
        }
    }
    catch(error){
        carregando(false, div)
        alert('Algo deu errado, verifique e tente novamente!')
        console.warn(error)
    }
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

function adicionarResultado(div) {

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
    
    div.appendChild(tituloMusicaElemento) 
    div.appendChild(musicaElemento)  

    div.appendChild(tituloArtistaElemento)
    div.appendChild(artistaElemento)

    div.appendChild(tituloLançamentoElemento) 
    div.appendChild(lançamentoElemento) 

    div.appendChild(tituloLetraElemento)
    div.appendChild(letraElemento)  
}

function apagarResultadoDiv(div) {
    div.innerHTML = ''
}

function apagarResultadoInput(nomeMusica) {
    nomeMusica.value = ''
}