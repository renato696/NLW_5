#Anotações de aula

## Aula 01

- Criar package.json, que é o arquivo de gerenciamento do projeto<br>
  `npm init -y`
 
 - Instalar o express<br>
   `npm install express`

- Criar a pasta /src

- Criar o arquivo /src/server.ts e dentro deste arquivo, importar o express<br>
  `import express, { response } from "express";`
    
- Criar as rotas do servidor<br> 
  `app.get / post`

- Iniciar o servidor app.listen(porta, função console.log)<br>
  `é interessante colocar um console.log("server is runnin...") para visualizar no terminal que está rodando.`
  
- Adicionar as tipagens do Typescript<br>
  `npm add @types/express -D`

- A partir deste ponto, eu deixei de usar o NPM e passei a usar o Yarn para acompanhar melhor a instrutora, que usava o Yarn.<br>
  `sudo npm install --global yarn (instala o Yarn)`

- Instalar o Typescript como dependência para utilizar forma nova de import / export<br>
  `npm add typescript -D`

- Criar o arquivo de configuração do Typescript<br>
  `npm tsc --init`<br>
  e alterar o "strict": false (que retira a verificação que o strict fazia)

- Instalar o node-dev como mais uma dependencia de desenvolvimento para ajudar o NodeJS a entender o import / export<br>
  `yarn add ts-node-dev -D`
  
- Criar no package.json um script para o ts.node rodar a aplicação<br>
  ```
  "scripts": {
        "dev":"ts-node-dev src/server.ts",
  ```

- Rodar o servidor<br>
  `yarn dev`
  <p>OBS: o interessante de fazer desta forma é que qualquer alteração no arquivo server.ts, assim que salva, ele já reinicia o servidor.</p> 
  
- Criar rotas GET e POST no servidor<br>
  ```
  app.post("/", (request, response) => {
        return response.json({ message: "usuário salvo com sucesso!"})
  ``` 
    
- Instalar o Insomnia

- Criar e testar rota post no Insomnia<br>
![insomnia criando rota POST](https://user-images.githubusercontent.com/68570832/115545895-bcab8800-a27a-11eb-9107-c7f29bc345fa.png)

## Aula 02 - Iniciando o Banco de Dados<br>

- typeORM - typeorm.io - verificar com calma esta ferramenta, muito utilizada na aplicação<br>

- instalar o typeorm e suas dependencias para o SQLite
`yarn add typeorm reflect-metadata sqlite3`

- criar o arquivo ormconfig.json na raiz do projeto.<br>
OBS: instalamos o driver SQLite3, mas no projeto, vamos usar o nome SQLite.<br>

- criar a pasta database dentro do /src, para colocar as configuraçõesde criação de conexão.

- criar dentro do /database o arquivo index.ts, e importar o createConection.

- importar o /database no server.ts
`import "./database"; `

- MIGRATIONS: histórico de tudo o que é feito no DB

- criar o database no ormconfig.json
`"database": "./src/database/database.sqlite"`

- inserir as migrations, note que elas vão dentro de um array:
`"migrations": ["./src/database/migrations/**.ts"]`

- adicionar ao package.json o script:
`"typeorm": "ts-node-dev node_modules/typeorm/cli.js"`

- e então, no ormconfig, inserir a cli e informar onde estão as migrations<br>

- para criar as tabelas (migrations):
`yarn typeorm migrations create -n CreateSettings`

- criar a tabela e configurações UP e DOWN<br>

- rodar a tabela:
`yarn type orm migration run`
OBS: verificar com o BeeKeeper Studio<br>

- criar a pasta ./src/entities e o arquivo settings.ts

- aterar no tsconfig as decorations

- adicionar a biblioteca UUID para que o projeto tenha a responsabilidade de criar as UUIDs
`yarn add uuid`

- instalar as tipagens também
`yarn add@types/uuid -D`

- fazer mais uma configuração no typeorm

- criar a pasta repositories e settingsRepository.ts

- criar as rotas: arquivos de rotas routes.ts e importar no server.ts

- fazer a criação do controller
