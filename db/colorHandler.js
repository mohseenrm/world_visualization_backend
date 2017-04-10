// const classyBrew = require( './classyBrew' ),
const classyBrew = require( './classyBrew' ),
	rgbHex = require( 'rgb-hex' );

const pool = require( './poolHandler' ),
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

	const color = brew.getColorInRange( 173375508073.07 );

	// console.log( `CN: ${data[0].countryname} | YR: ${data[0].year} | color: #${ rgbHex( brew.getColorInRange( data[0].gdp_us ) ) }` );
	_.forEach( data, updateQuery );
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
			"update pivot_indicators set gdp_us_color = $3::text where countryname = $1::text and year = $2::int ", [row.countryname, row.year, `#${ rgbHex( brew.getColorInRange( row.gdp_us ) )}`], ( err, result ) => {
				done( err );

				if( err )
					console.log( `error running query ${err}` );

				// console.log( result.rows[0] );
			});
	});
};

module.exports.updateColors = updateColors;