'ust strict';

var express         = require('express'),
    port            = 3000,
    bodyParser		= require('body-parser'),
    methodOverride	= require('method-override'),
    app             = express();

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + '/public'});
});

app.listen(port);
console.log('Listening on port ' + port + '...');
