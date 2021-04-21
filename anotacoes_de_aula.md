#Anotações de aula

## Aula 01

- Criar package.json, que é o arquivo de gerenciamento do projeto
    <p>npm init -y</p>
 
 - Instalar o express
    npm install express

- Criar a pasta /src

- Criar o arquivo /src/server.ts e dentro deste arquivo, importar o express
    import express, { response } from "express";
    
- Criar as rotas do servidor app.get / post

- Iniciar o servidor app.listen(porta, função console.log)
  é interessante colocar um console.log("server is runnin...") para visualizar no terminal que está rodando. 
  
- Adicionar as tipagens do Typescript
    npm add @types/express -D

A partir deste ponto, eu deixei de usar o NPM e passei a usar o Yarn para acompanhar melhor a instrutora, que usava o Yarn.
  sudo npm install --global yarn (instala o Yarn)

- Instalar o Typescript como dependência para utilizar forma nova de import / export
  npm add typescript -D

- Criar o arquivo de configuração do Typescript
  npm tsc --init
  e alterar o "strict": false (que retira a verificação que o strict fazia)

- Instalar o node-dev como mais uma dependencia de desenvolvimento para ajudar o NodeJS a entender o import / export
  yarn add ts-node-dev -D
  
- Criar no package.json um script para o ts.node rodar a aplicação
  "scripts": {
    "dev":"ts-node-dev src/server.ts",

- Rodar o servidor
   yarn dev 
  OBS: o interessante de fazer desta forma é que qualquer alteração no arquivo server.ts, assim que salva, ele já reinicia o servidor. 
  
- Criar rotas GET e POST no servidor
  app.post("/", (request, response) => {
    return response.json({ message: "usuário salvo com sucesso!"})
    
- Instalar o Insomnia

- Criar e testar rota post no Insomnia
![insomnia criando rota POST](https://user-images.githubusercontent.com/68570832/115545895-bcab8800-a27a-11eb-9107-c7f29bc345fa.png)

