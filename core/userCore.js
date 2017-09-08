var db = require('../config/db_config.js');
//list all data
exports.listUser = function(callback){
    
    db.User.find({},function(error,users) {
        
        if(error) {
            callback({error: 'Erro ao buscar usuários'});
        }else {
            callback(users);
        }
    });
};

//list a user for id
exports.userById = function(id,callback){
    
    db.User.findById(id,function(error,user) {
        
        if(error) {
            callback({error: 'Erro ao buscar o usuario'});
        }else {
            callback(user);
        }
    });
};

//save user 
exports.save = function(fullname,cpf,endereco,email,callback){
    
     new db.User({
        'fullname':fullname,
        'cpf': cpf,
        'endereco': endereco,
        'email': email,        
        'created_at': new Date()
    }).save(function(error,user){
        if(error){

            callback({error:'Não foi possivel salvar o json'});
        } else {

            callback(user);
        }
    });
};