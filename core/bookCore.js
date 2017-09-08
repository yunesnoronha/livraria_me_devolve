var db = require('../config/db_config.js');
//list all data
exports.listBook = function(callback){
    
    db.Book.find({},function(error,users) {
        
        if(error) {
            callback({error: 'Erro ao buscar usuários'});
        }else {
            callback(users);
        }
    });
};

//list a user for id
exports.bookById = function(id,callback){
    
    db.Book.findById(id,function(error,user) {
        
        if(error) {
            callback({error: 'Erro ao buscar o usuario'});
        }else {
            callback(user);
        }
    });
};

//save book 
exports.save = function(nome,editora,ano,callback){
    
     new db.Book({
        'nome':nome,
        'editora': editora,        
        'ano': ano,        
        'created_at': new Date()
    }).save(function(error,book){
        if(error){

            callback({error:'Não foi possivel salvar o json'});
        } else {

            callback(book);
        }
    });
};