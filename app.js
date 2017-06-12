var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res,next){

    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
    var lang = req.connection.language;
    var soft = req.connection.software;

   res.json({ipaddress: ip, language: lang, software: soft});
});




app.listen(process.env.PORT || 3030, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});