# TRIAGIL - Backend da Aplicação

![allcontributor](https://img.shields.io/badge/all%20contributors-6-brightgreen) ![pg](https://badgen.net/badge/icon/postgresql?icon=postgresql&label)
## Sobre

<div align="center"><img width="300px" height="175px" src="https://imgur.com/yBMVGy9.png"/></div>

Triagil trata-se de uma aplicação que tem como objetivo auxiliar os profissionais da saúde no processo de triagem de maneira mais rápida e ágil.

## Instalação

**Linguagens**: JavaScript </br>
**Tecnologias**: PostgreSQL, Node JS </br>

<img width="55px" height="50px" src="https://imgur.com/wVQA02I.png"/> <img width="75px" height="50px" src="https://imgur.com/g75zlLp.gif"/> <img width="70px" height="50px" src="https://i.imgur.com/6wEVcni.png"/> <img width="70px" height="50px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F1x%2Fsequelize-logo.png&f=1&nofb=1"/> <img width="70px" height="50px" src="https://imgur.com/UWlGuMy.gif"/> <img width="70px" height="60px" src="https://brunocapuano.files.wordpress.com/2016/06/swarmnado.gif"/>

### Passos para a Execução do Backend

- Instale o [Git](https://git-scm.com/downloads) em sua máquina. </br>

- Clone o repositorio: `git clone https://github.com/UnBArqDsw/2020.1_G1_Triagil.git` </br>

- Acesse a o diretório do Backend `cd 2020.1_G1_Triagil/Back/` </br>

- Instale o [Docker](https://docs.docker.com/engine/install/) e [Docker Compose](https://docs.docker.com/compose/install/) em sua máquina. </br>

- Execute o banco de dados: `sudo docker-compose up --build` </br>
(para as demais vezes será necessário somente executar `sudo docker-compose up`) </br>

- Instale as dependencias em sua máquina: </br>
`yarn add sequelize` </br>
`yarn add sequelize-cli -D` </br>
`yarn add sucrase nodemon -D` </br>
`yarn add bcryptjs` </br>

- Instale as dependencias do PostegreSQL: </br>
`yarn add pg` </br>
`yarn add pg-hstore` </br>

- Faça as migrações das tabeladas para banco de dados: `yarn sequelize db:migrate` </br>

- Execute a API Node: `yarn dev` </br>

## Outros

### Contribuindo

Certifique-se de ler o [Guia de Contribuição](https://github.com/UnBArqDsw/2020.1_G1_Triagil/blob/master/CONTRIBUTING.md) antes de fazer um _Pull Request_.

### Playlist Recomendada pela Equipe Triagil

[<img src="https://i.imgur.com/r2CyliD.jpg"/>](https://open.spotify.com/embed/playlist/3UofgfCHHvuv6PTXDOlxNj)

<div align="center"><footer>&copy; Copyright 2020 TRIAGIL</footer></div>
