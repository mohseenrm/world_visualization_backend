const argv = require( 'yargs' ).argv,
	cors = require( 'cors' ),
	express = require( 'express' ),
	bodyParser = require( 'body-parser' ),
	path = require( 'path' );

const pool = require( path.join( __dirname, 'db', 'poolHandler' ) ),
	colorHandler = require( path.join( __dirname, 'db', 'colorHandler' ) ),
	queryBuilder = require( path.join( __dirname, 'db', 'queryBuilder' ) ),
	graphBuilder = require( path.join( __dirname, 'db', 'graphBuilder' ) );

let app = express();

app.use( cors() );
app.use( bodyParser.json() );

app.set( 'port', process.env.PORT || argv.port || 8080 );

app.use( '/', express.static( __dirname ) );

app.get( '/', ( request, response ) => {
	// response.send( 'hola' );
	response.sendFile(path.join(__dirname + '/index.html'));
} );

app.post( '/main', ( request, response ) => {
	console.log( request.body );
	//if valid json
	pool.connect(( err, client, done ) => {
		if( err )
			return( console.log( `Error fethching client from pool ${err}` ) );
		client.query( queryBuilder( request.body ), ( err, result ) => {
				done( err );

				if( err )
					console.log( `error running query ${err}` );

				console.log( result.rows );
				// colorHandler.updateColors( result.rows );
				response.json( {
					data: result.rows
				} );
		} );
	});
} );

app.post( '/graph', ( request, response ) => {
	console.log( 'Processing Graph Request....' );
	console.log( request.body );

	pool.connect(( err, client, done ) => {
		if( err )
			return( console.log( `Error fethching client from pool ${err}` ) );

		client.query( graphBuilder( request.body ), ( err, result ) => {
				done( err );
				if( err )
					console.log( `error running query ${err}` );

				console.log( result.rows );
				response.json( {
					data: result.rows
				} );
		} );
	});
	console.log( 'Graph Request Completed' );
} );

app.listen( app.get( 'port' ), () => {
	console.log( `server listening on port : ${app.get( 'port' )}` );
} );