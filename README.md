# Desafio PCalixto

Repositório do desafio proposto pela empresa Consultoria Patrícia Calixto.
Esse repositório contém o **backend** e o **Frontend**;

## Instalação

Para instalar a aplicação basta ter o NodeJs e o NPM instalados em seu computador e seguir os seguintes comandos em seu terminal:

``` zsh
$ git clone https://github.com/MMortari/desafio-pcalixto.git
```

### **Backend**
``` zsh
$ cd desafio-pcalixto/backend/
```
``` zsh
$ npm install
```
Nessa parte é necessário dentro do seu MySQL criar uma tabela chamada 'agenda', depois, continue em seu terminal.

``` zsh
$ node_modules/.bin/sequelize db:migrate
```
``` zsh
$ npm run dev
```

### **Frontend**

Em outro terminal, vá até a pasta 'desafio-pcalixto';

``` zsh
$ cd frontend/agenda/
```
``` zsh
$ npm install
```
``` zsh
$ ng serve
```

E agora acesse em seu navegador a seguinte URL: http://localhost:4200

Obrigado pela oportunidade!