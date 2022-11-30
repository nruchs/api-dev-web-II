<h1 align="center"><p>TUTORIAL DE UTILIZAÇÃO DA API</p> </h1>

## Configurando o ambiente

### Faça o download de uma plataforma de API

- [Insomnia](https://insomnia.rest/download)
- [Postman](https://www.postman.com/)
- [HTTPie](https://httpie.io/)

## Adicione as requests

## 🙍‍♂ USUARIOS

<p>GET:  http://localhost:3000/api/usuarios - Retorna todos os usuários cadastrados</p>
<p>POST:  http://localhost:3000/api/usuario/ - Adiciona um novo usuário</p>

```json
{
  "nome_user": "João",
  "fone_user": "12-3456-7890",
  "cpf_user": "09876543210",
  "uf_user": "SC"
}
```

<p>PUT:  http://localhost:3000/api/usuario/{cd_user} - Altera um usuário pelo ID</p>

```json
{
  "nome_user": "João",
  "fone_user": "12-3456-7890",
  "cpf_user": "09876543210",
  "uf_user": "SC"
}
```

<p>DELETE:  http://localhost:3000/api/usuario/{cd_user} - Deleta um usuário pelo ID</p>

---

## 🏢 EMPRESAS

<p>GET:  http://localhost:3000/api/empresas - Retorna todas as empresas</p>
<p>POST:  http://localhost:3000/api/empresa/ - Adiciona uma nova empresa</p>

```json
{
  "nome_emp": "Empresa",
  "fone_emp": "12-3456-7890",
  "cnpj_emp": "83395921000390"
}
```

<p>PUT:  http://localhost:3000/api/empresa/{cd_emp} - Altera uma empresa pelo ID</p>

```json
{
  "nome_emp": "Empresa",
  "fone_emp": "12-3456-7890",
  "cnpj_emp": "83395921000390"
}
```

<p>DELETE:  http://localhost:3000/api/empresa/{cd_emp} - Deleta uma empresa pelo ID</p>

---

## 🧾 PRODUTOS

<p>GET:  http://localhost:3000/api/produtos - Retorna todos os produtos</p>
<p>POST:  http://localhost:3000/api/produto/ - Adiciona um novo produto</p>

```json
{
  "nome_prod": "Galaxy S20",
  "qntd_prod": "12",
  "cat_prod": "Smartphone",
  "val_prod": "3200"
}
```

<p>PUT:  http://localhost:3000/api/produto/{cd_prod} - Altera um produto pelo ID</p>

```json
{
  "nome_prod": "Galaxy S20",
  "qntd_prod": "12",
  "cat_prod": "Smartphone",
  "val_prod": "3200"
}
```

<p>DELETE:  http://localhost:3000/api/produto/{cd_prod} - Deleta um produto pelo ID</p>

---

## Veja as tabelas pelo navegador

- [Clique aqui](http://localhost:3000/api/front)

---

Feito com ♥ by Natalia Ruchs