
//var app = require('./app_config.js');
var  express = require('express');
var  consign = require('consign');


const app = express();

app.get('/', function(req,res) {
    
       res.end('Servidor ON!');
    
    });

consign()
    .include('./config/app_config.js')    
    .then('./model/userModel.js')
    .then('./controller/userController.js')
    .then('./controller/bookController.js')
    .into(app);
    
