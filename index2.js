const argv = require( 'yargs' ).argv,
	cors = require( 'cors' ),
	express = require( 'express' ),
	bodyParser = require( 'body-parser' );

let app = express();

app.use( cors() );
app.use( bodyParser.json() );

app.set( 'port', argv.port || 8080 );

app.get( '/', ( request, response ) => {
	response.send( 'hola' );
} );

app.post( '/main', ( request, response ) => {
	console.log( request.body );
	response.send( 'hola' );
} );

app.listen( app.get( 'port' ), () => {
	console.log( `server listening on port : ${app.get( 'port' )}` );
} );