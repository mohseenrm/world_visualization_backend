const http = require('http'),
	url = require('url'),
	fs = require('fs'),
	path = require('path'),
	argv = require('yargs').argv;

const pool = require(path.join(__dirname, 'db', 'poolHandler')),
	colorHandler = require( path.join( __dirname, 'db', 'colorHandler' ) );

//set connection with postgres
//based on post request handle, generate JSON and emit to client
//convert json
// console.log(`path: ${__dirname}`);
var server = http.createServer(function (request, response) {

	var relpath = url.parse(request.url).pathname;
	console.log(relpath);

	switch(relpath){
		case '/':
			console.log('hit root');
			// console.log( `request: ${request}` );
			
			// response.writeHead(200, {'Content-Type': 'text/html'});
			// response.write('hello world');
			response.end();
			break;
		case '/index.html':
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
		case '/query.html':
			console.log('hit query');
			pool.connect((err, client, done) => {
				if(err)
					return(console.log(`Error fethching client from pool ${err}`));
				

				for( i = 1970; i < 2015; i++ ){
					client.query(
						"select countryname, year, inflation from pivot_indicators  where year = $1::int order by inflation", [i], (err, result) => {
							done(err);

							if(err)
								console.log(`error running query ${err}`);

							console.log(result.rows[0]);
							colorHandler.updateColors( result.rows );
						});
				}
			});
			break;
		case '/main':
			console.log( `got request` );
			console.log( `request: ${request.body}` );
			console.log( `request: ${Object.keys(request)}` );
			console.log( '******' )
			console.log( `request: ${Object.keys(request.readable)}` );
			console.log( `request: ${request.statusMessage}` );
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