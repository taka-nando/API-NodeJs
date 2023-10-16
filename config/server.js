
let express = require('express'); //Express é uma biblioteca que controla as rotas da aplicação
let app = express();
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser')

app.set('view engine', 'ejs'); //Configurando o EJS como visualizador padrão
app.use(express.static('views/static')); // Configurando o Express para arquivos estáticos
app.use(express.json()); //Configurando o Express para trabalhar com json
app.use(express.urlencoded({extend: true})); //Config o Express para receber formulários Html como json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;
















