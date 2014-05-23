var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');



var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(express.bodyParser());

app.post('/comments', function(request, response){
    var Comment = require('./model/comment');
    comment = new Comment(request.body);
    comment.save(function() {
        response.send(comment);
    })
});
app.get('/comments', function(request, response){
    var Comment = require('./model/comment');
    Comment.find().exec(function(err, comments) {
    	response.send({comments: comments});
    });
});

app.delete('/comments/:id', function(request, response) {
    var Comment = require('./model/comment');
    Comment.remove({_id: mongoose.Types.ObjectId(request.param('id'))}, function(err) {
        response.send({error:err});
    })
});



app.listen(3030);