const brew = require( 'colorbrewer' ),
	poolHandler = require( './poolHandler' );

const init = ( data ) => {
	console.log( `Got data: ${data}` );
	//brew.setSeries( data );
	brew.setNumClasses( 7 );
	brew.setColorCode( 'GnBu' );
	brew.classify( 'jenks' );

};

const updateColors = ( data ) => {
	init( data );

	const breaks = brew.getBreaks(),
			colors = brew.getColors();
	//const color = brew.getColorInRange( data[i] );
	// //for each year
	// { 
	// 	country: x,
		// year: 1991,
	// 	gdp_us_color: '#xxx'
	// }
};

module.exports.updateColors = updateColors;