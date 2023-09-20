<div>

# API ONG Cão Feliz
<p>
Esse é um projeto backend em grupo, do módulo 4 da Resilia Educação, desenvolvido em JavaScript.
O intuito do projeto é desenvolver uma API para gerenciar os dados de uma ONG de adoção de animais.
</p>

## Requisitos
<p>
Para executar o projeto em sua máquina é necessário ter o node instalado em seu computador, para o projeto funcionar é só seguir o passo a passo descrito no final do documento.
</p>

## Stacks

Foi utilizado no projeto as stacks a seguir:

- [Node][https://nodejs.org/en/about]
- [Javascript][https://developer.mozilla.org/pt-BR/docs/Web/JavaScript]
- [Insomnia][https://insomnia.rest/]
- [JS | Express][https://expressjs.com/pt-br/starter/installing.html]
- [JS | Cors][https://www.npmjs.com/package/cors]
- [JS | Dotenv][https://www.npmjs.com/package/dotenv]
- [JS | MongoDB][https://www.mongodb.com/docs/atlas/]
- [JS | Mongoose][https://mongoosejs.com/docs/guide.html]


## Como executar o projeto
1. Use o comando: `git clone https://github.com/VictorVechi/APIong.git` no terminal de sua preferência. Entretanto, recomenda-se o terminal do [git](https://git-scm.com).

```bash
# Clonando o repositório
$ git clone https://github.com/VictorVechi/APIong.git
$ cd APIong
```

2. Use o comando `npm install` para instalar as dependências.

```bash
# Instalando as dependências
$ npm install
```

3. Deve-se criar um novo arquivo na raíz do projeto para inserir os dados de conexão com o MongoDB, chamado `.env`, e inserir as variáveis de ambiente de acordo com o modelo `.env.example` que está na pasta raíz ou a seguir:
```bash
USER_DB= SeuUser
PASSWORD= SuaSenha
DATABASE= IDdoBanco (exemplo: vysweho)
CLUSTER= NomedoCluster
PORT= PortaDaAPI (exemplo: 3000)
```

4. Utilize o comando `npm start` no terminal para executar a API.
```bash
$ npm start
```
## Banco de dados e rotas
<p>Nossa API possui 5 collections, tais quais:</p>

<ul>
<li>Doações</li>
<li>Endereço da Unidade</li>
<li>Endereço do Usuário</li>
<li>Pets</li>
<li>Unidades</li>
<li>Usuários</li>
</ul>

<p>As seguintes rotas estão disponíveis para as collections:</p>
<h4>Pets:</h4>
<ul>
<li>GET http://localhost:3000/pets</li>
<li>GET http://localhost:3000/pets/id</li>
<li>POST http://localhost:3000/pets</li>
<li>PUT http://localhost:3000/pets/id</li>
<li>DELETE http://localhost:3000/pets/id</li>
</ul>

<h4>Endereço da Unidade</h4>
<ul>
<li>GET http://localhost:3000/enderecoUnidade</li>
<li>GET http://localhost:3000/enderecoUnidade/id</li>
<li>POST http://localhost:3000/enderecoUnidade</li>
<li>PUT http://localhost:3000/enderecoUnidade/id</li>
<li>DELETE http://localhost:3000/enderecoUnidade/id</li>
</ul>

<h4>Endereço do Usuário</h4>
<ul>
<li>GET http://localhost:3000/enderecoUsuario</li>
<li>GET http://localhost:3000/enderecoUsuario/id</li>
<li>POST http://localhost:3000/enderecoUsuario</li>
<li>PUT http://localhost:3000/enderecoUsuario/id</li>
<li>DELETE http://localhost:3000/enderecoUsuario/id</li>
</ul>

<h4>Doação</h4>
<ul>
<li>GET http://localhost:3000/doacoes</li>
<li>GET http://localhost:3000/doacoes/id</li>
<li>POST http://localhost:3000/doacoes</li>
<li>PUT http://localhost:3000/doacoes/id</li>
<li>DELETE http://localhost:3000/doacoes/id</li>
</ul>

<h4>Usuários</h4>
<ul>
<li>GET http://localhost:3000/usuarios</li>
<li>GET http://localhost:3000/usuarios/id</li>
<li>POST http://localhost:3000/usuarios</li>
<li>PUT http://localhost:3000/usuarios/id</li>
<li>DELETE http://localhost:3000/usuarios/id</li>
</ul>

<h4>Unidades</h4>
<ul>
<li>GET http://localhost:3000/unidades</li>
<li>GET http://localhost:3000/unidades/id</li>
<li>POST http://localhost:3000/unidades</li>
<li>PUT http://localhost:3000/unidades/id</li>
<li>DELETE http://localhost:3000/unidades/id</li>
</ul>

<u>GET</u>: Rota para obter registros do banco

<u>POST</u>: Rota para cadastrar dados no banco

<u>PUT</u>: Rota para atualizar dados no banco

<u>DELETE</u>: Rota para deletar registros do banco


<p>Para utilizá-las, apenas substitua o "id" pelo id desejado.</p>
<p>Exemplo:</p>

```bash
http://localhost:3000/pets/65046310f7221b9f02150b8c
```
<p>No exemplo acima, "<u>65046310f7221b9f02150b8c</u>" é o ID do Pet.</p>


<p>Exemplo de como deve ser feito o post de Pets:</p>


```json
{
    "nome":"Leonardo",
    "raca":"tartaruga",
    "peso": 12,
    "idade":"80 anos",
    "id_unidade":"65079d364d42bc6b00639650"
}
```

<p>Exemplo de como deve ser feito o post de Endereço do Usuário:</p>


```json
{
    "cep":"83325250",
    "rua": "av maringá",
    "numero": "22b",
    "complemento":"casa"
}
```

<p>Exemplo de como deve ser feito o post de Endereço da Unidade:</p>


```json
{
    "cep":"83325250",
    "rua": "av maringá",
    "numero": "22b"
}
```

<p>Exemplo de como deve ser feito o post de Unidade:</p>


```json
{
    "email":"aaa@gmail.com",
    "telefone":"41999990000",
    "id_endereco":"asnfjka23J"
}
```

<p>Exemplo de como deve ser feito o post de Usuário:</p>


```json
{
    "nome":"Leonardo",
    "email":"aaaa@aa",
    "telefone":"12424124",
    "id_endereco_usuario":"abFjcnmA32"
}
```

<p>Exemplo de como deve ser feito o post de Doação:</p>


```json
{
    "valor":12.5,
    "cpf_cnpj": "11111111111"
}
```



Desenvolvido por: Francheska Oliveira, José Proença, Rafael Fantin e Victor Vechi
</div>