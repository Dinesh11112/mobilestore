var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://Dinesh1234:dinesh1551@mobiledata.2dulw.mongodb.net/MobileData?retryWrites=true&w=majority';

mongoose.connect(dbURI,{dbName:'MobileData'});
mongoose.connection.on('connected',function(){
    console.log('Mangoose connected to '+ dbURI);
});

mongoose.connection.on('error',function(err){
    console.log('Mangoose connection error: '+ err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mangoose disconnected');
});
require('./mobile');
