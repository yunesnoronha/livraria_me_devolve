module.exports = app => {
//var userModel = require('../model/userModel.js')
//var userModel = app.model.userModel;
var userCore = require('../core/userCore.js');
//carrega lib validator - validar entrada de dados
var validator = require('validator');


    //busca todos os usuarios
    app.get('/users', function(req,res) {
        userCore.listUser(function(resp){
            res.json({resp});
        });
        
    });

    //busca usuario pelo id 
    app.get('/users/:id', function(req,res) {
        var id = validator.trim(validator.escape(req.param('id')));
        userCore.userById(id,function(resp){
            res.json({resp});
        });
        
    });

    //insert
    app.post('/users', function(req,res) {
       
        var fullname =validator.trim(validator.escape(req.param('fullname')));        
        var cpf = validator.trim(validator.escape(req.param('cpf')));
        var endereco = validator.trim(validator.escape(req.param('endereco')));
        var email = validator.trim(validator.escape(req.param('email')));
              
        userCore.save(fullname,cpf,endereco,email,function(resp){
            res.json({resp});
        });
        
    });

    //atualização
    app.put('/users', function(req,res) {
        res.json({user: 'Usuario'});
    });

    //delete
    app.delete('/users', function(req,res) {
        res.json({user: 'Not implemented!'});
    });
}