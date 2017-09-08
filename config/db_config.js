//banco de dados
//string de conexao
var db_string = 'mongodb://127.0.0.1:27017/livraria_me_devolve';

//motor de conexao
var mongoose =  require('mongoose').connect(db_string);
//connect
var db = mongoose.connection;


db.on('error',console.error.bind(console,'Erro ao conectar na base de dados mongodb'));

// criação das colecoes
db.once('open',function(){
    var userSchema = mongoose.Schema({
        fullname: String,
        cpf: Number,
        endereco: String,
        email: String,
        password: String,
        created_at: String
    });
    exports.User = mongoose.model('User',userSchema);

    //book
    var bookSchema = mongoose.Schema({
        nome: String,
        editora: String,
        ano: String,
        created_at: String
    });
    exports.Book = mongoose.model('Book',bookSchema);

    //Location
    var locationSchema = mongoose.Schema({
        id_cliente:String,
        id_livro:String,
        data_locacao:String,
        data_entrega:String,
        created_at: String
    });
    exports.Location = mongoose.model('Location',locationSchema);
    
});

