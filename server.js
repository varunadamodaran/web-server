var express = require('express');

var app = express();
var middleware = {
	requireAuthentication: function (req,res,next){
		console.log('private');
		next();
	},
	logger: function (req,res,next){
		var d = new Date().toString();
		console.log(req.method+" "+d);
		next();
	}
};

app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication, function (req, res){
	res.send('About us!');
});

app.use(express.static(__dirname +'\\public'));
console.log(__dirname +'\\public');
app.listen(3000, function (){
	console.log('Express server started!');
});