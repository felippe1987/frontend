# Frontend do Sistema de Controle de Gastos

Este é o frontend do **Sistema de Controle de Gastos**, desenvolvido em React com Material-UI. Ele permite cadastrar pessoas, transações e consultar totais de receitas, despesas e saldos.

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)!

- NPM ou Yarn

🛠 Tecnologias Utilizadas
React: Biblioteca para construção da interface.

Material-UI: Biblioteca de componentes estilizados.

Axios: Cliente HTTP para consumir a API.

React Router DOM: Gerenciamento de rotas no frontend.

📂 Estrutura do Projeto
frontend/
├── public/
├── src/
│   ├── components/      # Componentes React
│   │   ├── CadastroPessoas.jsx
│   │   ├── CadastroTransacoes.jsx
│   │   └── ConsultaTotais.jsx
│   ├── services/        # Serviços (API)
│   │   └── api.js
│   ├── App.js           # Componente principal
│   └── index.js         # Ponto de entrada do frontend
├── package.json         # Dependências do frontend

🌟 Funcionalidades
Cadastro de pessoas com nome e idade.

Cadastro de transações (receitas/despesas) associadas a uma pessoa.

Consulta de totais de receitas, despesas e saldos por pessoa e geral.

Interface responsiva e amigável.(Não foi exigido uma interface mais detalhada)

## 🖼 Preview

![Screenshot da Aplicação](./src/assets/screnshots.png)

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
