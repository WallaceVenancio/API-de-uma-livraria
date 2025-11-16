# API da Livraria

Uma API RESTful para gerenciar uma livraria, com operações de **CRUD** (Criar, Ler, Atualizar e Deletar) usando Node.js, Express e MongoDB.

---

## 🚀 Tecnologias

- Node.js  
- Express.js  
- MongoDB  
- Mongoose (ou driver Mongo, dependendo da implementação)  
- Postman (para testar os endpoints)  

---

## Pré-requisitos

- Node.js instalado  
- MongoDB rodando localmente (ou configurar uma URL de conexão para um banco remoto)  
- npm  

---

## Como executar

1. Clone o repositório:  
   ```bash
   git clone https://github.com/WallaceVenancio/API-de-uma-livraria.git

2. Entre na pasta do projeto:
   ```bash
   cd API-de-uma-livraria

4. Instale as dependências:
   ```bash
   npm install

6. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev

8. A API estará disponível em:
   ```bash
   http://localhost:3000/

Endpoints
Aqui estão os principais endpoints que você pode testar usando o Postman:

| Método               | Endpoint      | Descrição                          |
| -------------------- | ------------- | ---------------------------------- |
| `GET /livros`        | `/livros`     | Lista todos os livros              |
| `GET /livros/:id`    | `/livros/:id` | Busca um livro por ID              |
| `POST /livros`       | `/livros`     | Cria um novo livro                 |
| `PUT /livros/:id`    | `/livros/:id` | Atualiza um livro existente por ID |
| `DELETE /livros/:id` | `/livros/:id` | Deleta um livro por ID             |

Importante: Ajuste os caminhos de acordo com a sua estrutura real de rotas.
---

Exemplo de requisição com Postman

Criar um livro (POST):
POST http://localhost:3000/livros  
Content-Type: application/json  

{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "preco": 59.90,
  "ano": 1954
}

Atualizar um livro (PUT):
PUT http://localhost:3000/livros/{id}  
Content-Type: application/json  

{
  "preco": 49.90
}
---

Estrutura do Projeto

Estrutira do projeto
API-de-uma-livraria/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .gitignore
├── package.json
└── README.md
---
