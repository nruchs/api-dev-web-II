require('dotenv').config({path: 'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

const routes = require('./routes');


const server = express();
server.use(express.json());

server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', routes);

server.set('views', path.join(__dirname, 'public/views'));
server.set('view engine', 'ejs');
server.set(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost: ${process.env.PORT}`);
});
