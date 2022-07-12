# Aplicação de upload de arquivos

## Tecnologias

* Node
* React
* Docker
* Typescript

## Rodar a aplicação

#### Crie os containers com Docker

```bash
$ docker-compose up
```

#### Acesse no browser

```
http://localhost:3000
```

#### Deseja acessar a API diretamente?

```
[POST] http://localhost:3001/uploads
```
* A requisição deve conter o arquivo em um campo "file"
