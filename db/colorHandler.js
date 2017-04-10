// const classyBrew = require( './classyBrew' ),
const classyBrew = require( './classyBrew' );

const poolHandler = require( './poolHandler' ),
	_ = require( 'lodash' );

let brew = new classyBrew();

const init = ( data ) => {
	const gdp_data = _.map( data, 'gdp_us' );
	console.log( `Got data: ${gdp_data}` );

	brew.setSeries( gdp_data );
	brew.setNumClasses( 7 );
	brew.setColorCode( 'GnBu' );
	brew.classify( 'jenks' );
	console.log(`End of Init: brew: ${brew}`);
};

const updateColors = ( data ) => {
	// console.log( `classyBrew: ${classyBrew}` );
	
	// console.log( `brew: ${brew}` );
	init( data );

	const breaks = brew.getBreaks(),
			colors = brew.getColors();
	// const color = brew.getColorInRange( data[i] );
	const color = brew.getColorInRange( 173375508073.07 );
	//map rgbHex
	console.log( `color : ${color}` );
	// //for each year
	// { 
	// 	country: x,
		// year: 1991,
	// 	gdp_us_color: '#xxx'
	// }
};

const updateQuery = ( row ) => {
	pool.connect( ( err, client, done ) => {
		if( err )
			return( console.log( `Error fethching client from pool ${err}` ) );

		client.query(
			"select countryname, year, gdp_us from pivot_indicators  where year = $1::int order by gdp_us", ['1991'], ( err, result ) => {
				done( err );

				if( err )
					console.log( `error running query ${err}` );

				console.log( result.rows[0] );
			});
	});
};

module.exports.updateColors = updateColors;