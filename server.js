var express     = require('express'); //Express JS framework
var app         = express(); //Invoke express to variable for use in the application
var port        = process.env.PORT || 3000;
var morgan      = require('morgan'); //Import morgan package
var mongoose    = require('mongoose'); //HTTP request logger middleware for Node.js
var mongojs     = require('mongojs');
var database    = mongojs('evalApp',['evalforms','users']);
var bodyParser  = require('body-parser');
var router      = express.Router();
var appRoutes   = require('./app/routes/api')(router);
var path        = require('path'); //Input path module


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')); //Morgan middleware
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost:27017/evalApp', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('Succesfully connected to MongDB');
    }
});

app.get('/ngevalform', function(req, res) {
    console.log('Receiving a GET request');
    
    database.evalforms.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/ngevalform', function(req, res) {
    database.evalforms.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/ngevalform/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    database.evalforms.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/ngevalform/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.evalTopic);
    database.evalforms.findAndModify({
        query: {_id: mongojs.ObjectId(id)},
        update: {$set: {evalFormType: req.body.evalFormType, 
                        evalFormYear: req.body.evalFormYear, 
                        evalTopic: req.body.evalTopic, 
                        evalWeight: req.body.evalWeight, 
                        evalCriteria: req.body.evalCriteria}},
        new: true}, function (err, doc) {
            res.json(doc);
        }
    );
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function() {
    console.log('Server is running on port ' + port);
});
