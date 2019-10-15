# Letras de Musicas
## Back e front unidos nesta aplicação

### Quem é esse tal de Cafesão? :question:

Ola, meu nome é Gabriel, apelido **Cafesão**.
Sou apenas um cara que **ama programar** e gosta de desafios, e desta vez o desafio foi criar um Server (Back-End)  que ouvesse um banco de dados (MongoDB) e que organizasse os GET e POST, mas não só isso, criar a parte do usuário (Front-End) para adicionar e pesquisar musicas.
>Interessante, eu sei.

### E como foi a criação de tudo isso? :grey_question:

Olha, foi interessante, passei por problemas e aprendi algumas coisas novas, e isto é o mais interessante de fazer todo o projeto, e você aprender coisas novas conforme vai evoluindo sua aplicação.
Teve um erro de digitação que descobri só depois DE **1 DIA E MEIO**, sim, um erro fez com que eu trancasse toda a aplicação por **36 HORAS**, pois é, erros travam projetos...

### Mas não tinha uma maneira mais fácil de fazer tudo isso? :hushed:

Sim :+1: , usando a API do [Letras](https://api.vagalume.com.br/docs/letras/), assim eu apenas montaria o front e feito, **maaaaaas** qual seria a graça né, é bom colocar a mão na massa e "reinventar a roda" de vez em quando, seja para aprender coisas novas ou melhorar o que você já sabe.

### E como faço para rodar? :open_mouth:

Primeiramente você precisa ter o [Yarn](https://yarnpkg.com/pt-BR/) instalado, junto com o [Node.JS](https://nodejs.org/pt-br/).

Feito isso e verificado se o Yarn e o Node.JS esta devidamente instalado, e so entrar na pasta raiz via terminal e colocar o comando `yarn install`, feito isso ele ira instalar todas as dependências.

Explicação do comando:

>O comando yarn install é usado para instalar todas as dependências de um projeto. As dependências são recuperadas do arquivo package.json do seu projeto, e armazenadas no arquivo yarn.lock.

Depois de ter instalado as dependências e so colocar `yarn dev` para rodar a aplicação e `yarn server` para rodar o server, acesse o link que o terminal do `yarn dev` dará como resposta e já estará funcionando, simples assim.

### Opcional :exclamation:

Você precisa ter instalado o [Docker](https://www.docker.com) ou o banco de dados do MongoDB, lendo o código você ira entender se precisa ou não de alguma modificação.
