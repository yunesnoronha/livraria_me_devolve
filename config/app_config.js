module.exports = app => {

//variavel express
// criação do servidor e config

//var express = require('express');
//const app = module.exports =  express();
const  PORT = 4000;

var bodyParser = require('body-parser');

var allowCors = function(req,res,next){

    res.header('Access-Control-Allow-Origin','127.0.0.1:4000');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials','true');

    next();
}

app.use(allowCors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
        extended: true
    }
));
app.listen(PORT,() => console.log('LIVRARIA ME DEVOLVE API - porta ${PORT}'));
}