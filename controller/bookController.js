module.exports = app => {   
    //carrega bookCore
    var bookCore = require('../core/bookCore.js');
    //carrega lib validator - validar entrada de dados
    var validator = require('validator');

     //busca todos os usuarios
     app.get('/book', function(req,res) {
        bookCore.listBook(function(resp){
            res.json({resp});
        });
        
    });

    //busca usuario pelo id 
    app.get('/book/:id', function(req,res) {
        var id = validator.trim(validator.escape(req.param('id')));
        bookCore.bookById(id,function(resp){
            res.json({resp});
        });
        
    });

    //insert
    app.post('/book', function(req,res) {
               
        var nome =validator.trim(validator.escape(req.param('nome')));        
        var editora = validator.trim(validator.escape(req.param('editora')));        
        var ano = validator.trim(validator.escape(req.param('ano')));
              
        bookCore.save(nome,editora,ano,function(resp){
            res.json({resp});
        });        
    });

    //atualização
    app.put('/book', function(req,res) {
        res.json({user: 'Usuario'});
    });
};