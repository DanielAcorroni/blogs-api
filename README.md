# Blogs Api

O desafio deste projeto era desenvolver uma Api para um blog utilizando do Node.js em conjunto com o pacote sequelize e os padrões REST.
> ***OBS: Tanto o Dockerfile quanto o docker-compose.yml foram disponibilizados prontos pela Trybe e não foram desenvolvido por mim!***

## 🐋 Rodando o projeto utilizando o Docker

> - Execute o comando *docker-compose up -d --build*
>> Caso esteja utilizando a porta padrão configurada no Dockerfile você pode adaptar o código presente
> - Execute o comando *docker exec -it blogs_api bash*
> - Dentro do terminal aberto no último comando execute o comando *npm install*
> - Ainda dentro do mesmo terminal, rode o comando *npm start* para iniciar sua aplicação

## 💻 Rodando o projeto localmente

> - Troque o nome do documento .env.example para .env e altere as informações necessárias como exemplificado
> - Execute o comando *npm install*
> - Execute o comando *npm start*

Pronto, os endpoints devem estar acessíveis a partir de agora, você pode utilizar ferramentas como o Postman, Thunder Client, Insomnia, ou o seu próprio navegador para executar cada endpoint e verificar o resultado.

## Endpoints disponíveis

- POST *http://localhost:3000/user*
> - Formato do body:
> ~~~JSON
> {
>   "displayName": "Ash Ketchum",
>   "email": "ash@ketchum.com",
>   "password": "123456",
>   "image": "https://cdn.ome.lt/qyFc-3bXb4b863CxEXHN7_MhXvw=/770x0/smart/uploads/conteudo/fotos/Pokemon_Mewtwo.jpg"
> }
> ~~~

- POST *http://localhost:3000/login*
> ***OBS: Para fazer um login, seu user deve ter sido criado no endpoint anterior***
> - Formato do body:
> ~~~JSON
> {
>   "email": "ash@ketchum.com",
>   "password": "123456"
> }
> ~~~

***❗A partir daqui todos os endoints necessitarão que você tenha passado pelo endpoint POST *http://localhost:3000/login*, uma vez que que as rotas verificarão um token JWT que foi criado ao efetuar o login❗***

- GET *http://localhost:3000/user*

- GET *http://localhost:3000/user/:id*

- POST *http://localhost:3000/categories*
> - Formato do body:
> ~~~JSON
> {
>   "name": "Pokemons"
> }
> ~~~

- GET *http://localhost:3000/categories*


- POST *http://localhost:3000/post*
> -Formato do body:
> ~~~JSON
> {
>   "title": "Latest updates, August 1st",
>   "content": "The whole text for the blog post goes here in this key",
>   "categoryIds": [1, 2]
> }
> ~~~
