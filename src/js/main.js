import {procurarMusica, apagarResultadoDiv, apagarResultadoInput} from './funcoes_Pesquisa'
import { prepararObjeto, apagarInput } from './funcoes_Adicionar'

let botao_Pesquisar = document.querySelector('button#pesquisar') 
botao_Pesquisar.addEventListener("click", Pesquisar)

let botao_Adicionar = document.querySelector('button#adicionar')
botao_Adicionar.addEventListener("click", Adicionar)

function Pesquisar() {
    var divResultado = document.querySelector('div#resultado_buscar')
    var nomeMusica = document.querySelector('div#buscar input#nomeMusicaProcurarInput')

    if(nomeMusica.value.length === 0) {
        alert('Por favor digite o nome da musica!')
    }
    else{
        apagarResultadoDiv(divResultado)
        procurarMusica(divResultado, nomeMusica.value)    
        apagarResultadoInput(nomeMusica)
    }
}

function Adicionar() {
    var divResultado = document.querySelector('div#resultado_adicionar')
    var nomeMusica = document.querySelector('div#adicionar input#nomeMusicaInput')
    var nomeArtista = document.querySelector('div#adicionar input#nomeArtistaInput')
    var lancamento = document.querySelector('div#adicionar input#anoLancamentoInput')
    var letra = document.querySelector('#letraInput')  

    if(nomeMusica.value.length === 0 || nomeArtista.value.length === 0 || lancamento.value.length === 0 || letra.value.length === 0){
        alert('Por favor, prencha todos os campos!')
    }
    else {
        prepararObjeto(nomeMusica.value, nomeArtista.value, lancamento.value, letra.value, divResultado)
        apagarInput(nomeMusica, nomeArtista, lancamento, letra)
    }
}