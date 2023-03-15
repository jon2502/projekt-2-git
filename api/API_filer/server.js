var express = require('express');
var app = express();
var fs = require("fs");

const cors = require('cors');
app.use(cors({
    origin: true
}))



app.get('/getOnequiz', function (req, res) {
   fs.readFile( __dirname + "/" + "quizIndex.JSON", 'utf8', function (err, data) {
      const JSdata = JSON.parse(data)
      console.log(JSdata)
      var start = req.query.start
      var end = req.query.end
      const first2 = JSdata.quizzes.slice(start, end);
      const JSONdata = JSON.stringify(first2)
      res.end( JSONdata );
   });
})
app.get('/postQuiz', function (req,res){
   fs.readFile( __dirname + "/" + "quizIndex.json", 'utf8', function (err, data) {
      res.end( data )
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})