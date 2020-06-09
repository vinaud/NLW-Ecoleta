# Projeto Ecoleta - Next Level Week
![logo](https://i.imgur.com/G5aG6xS.png)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

## Descrição
O projeta Ecoleta foi implementado durante o workshop Next Level Week da Rockeseat e seu objetivo é facilitar com que as pessoas tenham facilidade de encontrar pontos de coleto de reiduos especiais como lâmpadas e pilhas.
O projeto possui um módulo servidor, que fornece a API de consumo de informações do banco de dados, um módulo web com a interface de usuário que conecta com a API para o ccadastro de pontos de coleta, além do módulo mobile, que permite o usuário do app a localizr os pontos cadastrados.

## Tecnologias Usadas
- NodeJS Versão 12.16.1 
- ReactJs Versão 16.12.0
- React Native Versão 0.62
- Typescript
- Express
- Next 
- Expo
- HTL5 + CSS3
- SQLite3
- Leaflet
- Dropzone
- Knex
- Axios
- Multer
- Celebrate

## Instruções
### Instalação

- Clonar o projeto no ambiente local

- Em cada subprojeto, web, server e mobile, instalar as dependências com o comando:
```bash

$ npm install
```
- No módulo server executar as migrações com o comando :
```bash

$ npm run knex:migrate
```
e depois popular a tabela de "items" com o comando :
```bash

$ npm run knex:seed
```
### Execução em ambiente de desenvolvimento

- Servidor backend na pasta server:
```bash

$ npm run dev
```

- Frontend web via next na pasta web:
```bash

$ npm start
```

- Aplicação móvel via expo na pasta mobile:
```bash

$ npm start
```


## Telas do projeto
### Telas web

![inicial](https://i.imgur.com/fwXbks1.png)

![cadastro](https://i.imgur.com/m68lgoR.png)

![mapa](https://i.imgur.com/0xHvbS0.png)

![itens](https://i.imgur.com/SQD6n1m.png)
