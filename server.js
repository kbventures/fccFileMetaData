var express = require('express');
var cors = require('cors');
require('dotenv').config()
var path = require('path');

var app = express();

var multer = require('multer');


var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req,file,cb){
    cb(null, file.originalname + '-' + Date.now())
  }
})

var upload = multer({storage: storage});

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


// app.post('/api/fileanalyse', function(req,res){
//   res.json({"name":"extract_colors.png","type":"image/png","size":613553});
// })

app.post('/api/fileanalyse', upload.single('upfile'), function(req,res, next){
  console.log(req.file.originalname);
  res.json({"name":req.file.originalname,"type":req.file.mimetype,"size":req.file.size});
})


// The form file input field has the name attribute set to upfile.

// When you submit a file, you receive the file name, type, and size in

// bytes within the JSON response.


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});


module.exports = app; 
