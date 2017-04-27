const graphBuilder = ( filters ) => {
	return `select ${ getColumn( filters.filter ) } ,year from pivot_indicators where year >= ${ parseInt( filters.year ) - 5 } and year <= ${ parseInt( filters.year ) + 5 } and countrycode = '${ filters.countrycode }' order by year`;
};

const getColumn = ( field ) => {
	switch( field ){
		case 'GDP':
			return 'gdp_us';
		case 'FSI':
			return 'fsi';
		case 'INF':
			return 'inflation';
		case 'POP':
			return 'populationgrowth';
		case 'EMP':
			return 'employmentratio';
		case 'RES':
			return 'reserves';
		case 'FDI':
			return 'fdi';
		case 'TRA':
			return 'trade';
		default:
			return 'fsi';
	};
}

module.exports = graphBuilder;