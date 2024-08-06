# Cashforce-teste-dev

## Teste :: Desenvolvedor FullStack Jr.

### Descrição

Este projeto foi desenvolvido como parte do teste para a vaga de Desenvolvedor FullStack Jr. O objetivo foi criar uma API em Node.js utilizando Express e Sequelize, conectada a um banco de dados fornecido, e construir uma interface em Vue.js para consultar e exibir os dados da API.

### Tecnologias Utilizadas

- **Backend**: Node.js, Express, Sequelize
- **Frontend**: Vue.js
- **Banco de Dados**: MySQL

### Funcionalidades

- **API**:
  - Conectada ao banco de dados fornecido.
  - Endpoint para listar ordens (`/api/orders`).

- **Frontend**:
  - Tela desenvolvida em Vue.js.
  - Consulta a API para exibir dados de ordens.

### Dockerização

A aplicação está dockerizada e utiliza Docker Compose para orquestrar os containers.

### Instruções de Execução

No diretório raiz, rode o comando docker compose up -d --build. 
Acesse a aplicação no seu navegador em http://localhost:8080/
