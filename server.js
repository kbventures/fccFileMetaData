var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/test1', function(req,res){
  res.send({test:'Testing!'});
})



// {"name":"extract_colors.png","type":"image/png","size":613553}
app.get('/test2', function(req,res){
  res.json({"name":"extract_colors.png","type":"image/png","size":613553});
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});


module.exports = app; 
