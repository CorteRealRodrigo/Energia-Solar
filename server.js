require('dotenv').config(); // Para esconder dados pessoais.(variável de embiente, onde contem senhas, links e etc.)
const express = require('express'); // Para tratar as rotas.
const app = express();

const routes = require('./routes'); // Pegando as rotas routes.js
const path = require('path'); // Para pegar os caminhos.

// Se o sistema estiver sem SSL (sem https na URL), desativar o helmet, pois ele impede algumas importações como CSS e JS.
//const helmet = require('helmet'); // (Segurança) Para proteger o site.

// Se o sistema estiver sem SSL (sem https na URL), desativar o helmet, pois ele impede algumas importações como CSS e JS.
//app.use(helmet()); // Para o app usar o helmet.
app.use(express.urlencoded({ extended: true })); // Para receber/tratar o metodo POST.
app.use(express.json()); // Para receber dados Json. 
app.use(express.static(path.resolve(__dirname, 'public'))); // Para pegar o caminho absoluto da pasta public (css, img, js).
app.use(express.static(path.resolve(__dirname, 'frontend')));
// Utilizar se o projeto necessitar de login e senha.


app.set('views', path.resolve(__dirname, 'src', 'views')); // Para pegar o caminho absoluto da pasta views.
app.set('view engine', 'ejs'); // Para renderizar os views(HTML), utilizando sjs, (para utilizar if, for e etc.)

app.use(routes); // Para o app estar utilizando as rotas.

app.listen(3000, () => console.log('http://localhost:3000')); // Para o app estar rodando na porta 3000.
