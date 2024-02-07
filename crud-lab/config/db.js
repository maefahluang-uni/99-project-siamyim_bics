var mysql = require('mysql')
var connection = ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_js_crud'

});
var db;
function connectDb(){
    if(!db){
        db = mysql.createConnection(connection);
        db.connect(function(err){
            if (!err) {
                console.log("database connected success!!");
                console.log(connection);
            }else{
                console.log("Error database conncet!!");
            }
        });
    }
    return db;
}

module.exports = connectDb();