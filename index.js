const http = require('http'),
	url = require('url'),
	fs = require('fs'),
	path = require('path'),
	argv = require('yargs').argv;

const pool = require(path.join(__dirname, 'db', 'poolHandler'));

//set connection with postgres
//based on post request handle, generate JSON and emit to client
//convert json
// console.log(`path: ${__dirname}`);
var server = http.createServer(function (request, response) {
	var relpath = url.parse(request.url).pathname;

	switch(path){
		case '/':
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write('hello world');
			response.end();
			break;
		case 'index.html':
			fs.readFile(path.join(__dirname, relpath), function(error, data){
				if(error){
					response.writeHead(404);
					response.write('404 - no file');
					response.end();
				}
				else{
					response.writeHead(200, {'Content-Type': 'text/html'});
					response.write(data, 'utf8');
					response.end();
				}
			});
			break;
		case 'query':
			pool.connect((err, client, done) => {
				if(err)
					return(console.log(`Error fethching client from pool ${err}`));
				
				client.query(
					"SELECT countryname, year, gdp_local, gdp_us, reserves, externaldept, fdi, trade, inflation, marketcapitalization, centralgovdept, gini, povertygap, employmentratio, populationgrowth, internationalmigrant, fsi FROM public.pivot_indicators LIMIT 1",
					['1'], (err, result) => {
						if(err)
							console.log(`error running query ${err}`);
						console.log(result);
					});
			});
			break;
		default:
			response.writeHead(404);
			response.write('404 - no file');
			response.end();

	}

});
var port = 8001;
if (argv.port >= 8000 && argv.port !== undefined)
	port = argv.port;


console.log('Server Listening on port: ' + argv.port);
server.listen(port);