// const classyBrew = require( './classyBrew' ),
const classyBrew = require( './classyBrew' );

const poolHandler = require( './poolHandler' ),
	_ = require( 'lodash' );

const init = ( data, brew ) => {
	

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
	let brew = new classyBrew();
	// console.log( `brew: ${brew}` );
	init( data, brew );

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

module.exports.updateColors = updateColors;