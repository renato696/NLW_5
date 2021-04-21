#Anotações de aula

## Aula 01

- Criar package.json, que é o arquivo de gerenciamento do projeto<br>
  `npm init -y`
 
 - Instalar o express
   <p>npm install express</p>

- Criar a pasta /src

- Criar o arquivo /src/server.ts e dentro deste arquivo, importar o express
  `import express, { response } from "express";`
    
- Criar as rotas do servidor 
  <p>app.get / post</p>

- Iniciar o servidor app.listen(porta, função console.log)
  <p>é interessante colocar um console.log("server is runnin...") para visualizar no terminal que está rodando.</p> 
  
- Adicionar as tipagens do Typescript
  <p>npm add @types/express -D</p>

- A partir deste ponto, eu deixei de usar o NPM e passei a usar o Yarn para acompanhar melhor a instrutora, que usava o Yarn.
  <p>sudo npm install --global yarn (instala o Yarn)</p>

- Instalar o Typescript como dependência para utilizar forma nova de import / export
  <p>npm add typescript -D</p>

- Criar o arquivo de configuração do Typescript
  <p>npm tsc --init</p>
  <p>e alterar o "strict": false (que retira a verificação que o strict fazia)</p>

- Instalar o node-dev como mais uma dependencia de desenvolvimento para ajudar o NodeJS a entender o import / export
  <p>yarn add ts-node-dev -D</p>
  
- Criar no package.json um script para o ts.node rodar a aplicação
  <p>"scripts": {</p>
  <p>"dev":"ts-node-dev src/server.ts",</p>

- Rodar o servidor
  <p>yarn dev</p> 
  <p>OBS: o interessante de fazer desta forma é que qualquer alteração no arquivo server.ts, assim que salva, ele já reinicia o servidor.</p> 
  
- Criar rotas GET e POST no servidor
  <p>app.post("/", (request, response) => {</p>
  <p>return response.json({ message: "usuário salvo com sucesso!"})</p>
    
- Instalar o Insomnia

- Criar e testar rota post no Insomnia
![insomnia criando rota POST](https://user-images.githubusercontent.com/68570832/115545895-bcab8800-a27a-11eb-9107-c7f29bc345fa.png)

