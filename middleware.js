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

module.exports = middleware;