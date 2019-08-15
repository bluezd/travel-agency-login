var express = require('express');
var cookieParser = require('cookie-parser');
var express_session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = 8999;
var app = express();

app.use(cookieParser());
app.use(express_session({
	    key: 'user_sid',
	    secret: 'somerandonstuffs',
	    resave: false,
	    saveUninitialized: false,
	    cookie: {
		            expires: 600000
		        }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
require('./lib/routes.js')(app);

var server = app.listen(port, function () {
	   var host = server.address().address
	   var port = server.address().port

	   console.log("Graal.js server listening at http://%s:%s".red, host, port)
})
