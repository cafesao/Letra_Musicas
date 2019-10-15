//Importando modulos
import { procurarMusica } from './funcoes_Pesquisa'
import { prepararObjeto } from './funcoes_Adicionar'

//Variaveis
var nomeMusicaProcurar = document.querySelector('input#nomeMusicaProcurarInput')

nomeMusicaProcurar.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) { 
        Pesquisar()
    }
})

let botao_Pesquisar = document.querySelector('button#pesquisar') 
botao_Pesquisar.addEventListener("click", Pesquisar)

//Funções
function apagarResultadoPesquisa() {
    nomeMusica.value = ''
}


function Pesquisar() {
    if(nomeMusicaProcurar.value.length === 0) {
        alert('Por favor digite o nome da musica!')
    }
    else{
        procurarMusica(nomeMusicaProcurar.value)    
        apagarResultadoPesquisa()
    }
}


//Variaveis
var nomeMusica = document.querySelector('input#nomeMusicaInput')
var nomeArtista = document.querySelector('input#nomeArtistaInput')
var lancamento = document.querySelector('input#anoLancamentoInput')
var letra = document.querySelector('#letraInput')  

let botao_Adicionar = document.querySelector('button#adicionar')
botao_Adicionar.addEventListener("click", Adicionar)

//Funções
function apagarResultadoAdicionar() {
    nomeMusica.value = ''
    nomeArtista.value = ''
    lancamento.value = ''
    letra.value = ''
}

function Adicionar() {
    if(nomeMusica.value.length === 0 || nomeArtista.value.length === 0 || lancamento.value.length === 0 || letra.value.length === 0){
        alert('Por favor, prencha todos os campos!')
    }
    else {
        prepararObjeto(nomeMusica.value, nomeArtista.value, lancamento.value, letra.value)
        apagarResultadoAdicionar()
    }
}