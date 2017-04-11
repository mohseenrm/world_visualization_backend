const argv = require( 'yargs' ).argv,
	cors = require( 'cors' ),
	express = require( 'express' ),
	bodyParser = require( 'body-parser' ),
	path = require( 'path' );

const pool = require( path.join( __dirname, 'db', 'poolHandler' ) ),
	colorHandler = require( path.join( __dirname, 'db', 'colorHandler' ) );

let app = express();

app.use( cors() );
app.use( bodyParser.json() );

app.set( 'port', argv.port || 8080 );

app.get( '/', ( request, response ) => {
	response.send( 'hola' );
} );

app.post( '/main', ( request, response ) => {
	console.log( request.body );

	pool.connect((err, client, done) => {
		if(err)
			return(console.log(`Error fethching client from pool ${err}`));
		

		for( i = 1970; i < 2015; i++ ){
			client.query(
				"select countryname, year, inflation from pivot_indicators where year = $1::int order by inflation", [i], (err, result) => {
					done(err);

					if(err)
						console.log(`error running query ${err}`);

					console.log(result.rows[0]);
					colorHandler.updateColors( result.rows );
				});
		}
	});

	response.json( {
		country: 'XXX'
	} );
} );

app.listen( app.get( 'port' ), () => {
	console.log( `server listening on port : ${app.get( 'port' )}` );
} );