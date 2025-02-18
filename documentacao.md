Documentação do Projeto: Sistema de Controle de Gastos

1. Descrição do Projeto
   O Sistema de Controle de Gastos é uma aplicação web desenvolvida para gerenciar despesas e receitas de pessoas. Ele permite:

Cadastrar pessoas com nome e idade.

Cadastrar transações (receitas ou despesas) associadas a uma pessoa.

Consultar totais de receitas, despesas e saldos por pessoa e geral.

A aplicação foi desenvolvida com React no frontend e Node.js no backend, utilizando Material-UI para a interface gráfica.

2. Requisitos
   Requisitos Funcionais
   Cadastro de Pessoas:

Adicionar uma pessoa com nome e idade.

Listar todas as pessoas cadastradas.

Excluir uma pessoa e suas transações associadas.

Cadastro de Transações:

Adicionar uma transação com descrição, valor, tipo (receita/despesa) e pessoa associada.

Listar todas as transações cadastradas.

Impedir que menores de idade cadastrem receitas.

Consulta de Totais:

Exibir o total de receitas, despesas e saldo por pessoa.

Exibir o total geral de receitas, despesas e saldo líquido.

Requisitos Não Funcionais
Frontend:

Desenvolvido em React com Material-UI.

Interface responsiva e amigável.

Backend:

Desenvolvido em Node.js com Express.

Dados armazenados em memória (arrays).

Outros:

Aplicação deve rodar em qualquer navegador moderno.

Código organizado e documentado.

3. Tecnologias Utilizadas
   Frontend
   React: Biblioteca para construção da interface.

Material-UI: Biblioteca de componentes estilizados.

Axios: Cliente HTTP para consumir a API.

React Router DOM: Gerenciamento de rotas no frontend.

Backend
Node.js: Ambiente de execução JavaScript.

Express: Framework para criação da API.

CORS: Middleware para permitir requisições entre domínios.

4. Instalação e Execução
   Pré-requisitos
   Node.js instalado (versão 16 ou superior).

NPM para gerenciamento de pacotes.

5. Estrutura do Projeto
   Backend
   Copy
   backend/
   ├── server.js # Ponto de entrada do backend
   ├── package.json # Dependências do backend
   Frontend
   Copy
   frontend/
   ├── public/
   ├── src/
   │ ├── components/ # Componentes React
   │ │ ├── CadastroPessoas.jsx
   │ │ ├── CadastroTransacoes.jsx
   │ │ └── ConsultaTotais.jsx
   │ ├── services/ # Serviços (API)
   │ │ └── api.js
   │ ├── App.js # Componente principal
   │ └── index.js # Ponto de entrada do frontend
   ├── package.json # Dependências do frontend
6. Rotas da API
   Pessoas
   POST /pessoas: Cadastra uma nova pessoa.

Corpo da requisição:

json
Copy
{
"nome": "João Silva",
"idade": 25
}
GET /pessoas: Lista todas as pessoas cadastradas.

DELETE /pessoas/:id : Exclui uma pessoa e suas transações.

Transações
POST /transacoes: Cadastra uma nova transação.

Corpo da requisição:

json
Copy
{
"descricao": "Salário",
"valor": 3000,
"tipo": "receita",
"pessoaId": 1
}
GET /transacoes: Lista todas as transações cadastradas.

Totais
GET /totais: Retorna os totais de receitas, despesas e saldos por pessoa e geral.

7. Exemplos de Uso
   Cadastro de Pessoa
   Acesse http://localhost:3000/pessoas.

Preencha o formulário com nome e idade.

Clique em "Cadastrar".

Cadastro de Transação
Acesse http://localhost:3000/transacoes.

Preencha o formulário com descrição, valor, tipo e pessoa associada.

Clique em "Cadastrar".

Consulta de Totais
Acesse http://localhost:3000/totais.

Veja os totais de receitas, despesas e saldos por pessoa e geral.
