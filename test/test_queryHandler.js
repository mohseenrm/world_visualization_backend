const expect = require('chai').expect;
const queryBuilder = require( '../db/queryBuilder' );


describe('queryHandler test suite', () => {
	it('sample test', () => {
		expect(2 + 2).to.be.equal(4);
	});

	it( 'query builder', () => {
		const case1 = {
			year: 2001,
			filter: 'GDP'
		},
		case2 = {
			year: 1990,
			filter: 'FSI'
		},
		case3 = {
			year: 1970,
			filter: 'INF'
		},
		case4 = {
			year: 2014,
			filter: 'POP'
		},
		case5 = {
			year: 2000,
			filter: 'EMP'
		},
		case6 = {
			year: 1981,
			filter: 'RES'
		},
		case7 = {
			year: 1998,
			filter: 'FDI'
		},
		case8 = {
			year: 1995,
			filter: 'TRA'
		};

		expect( queryBuilder( case1 ) ).to.be.equal( 'select countryname, gdp_us, countrycode, gdp_us_color from pivot_indicators where year = 2001 order by gdp_us' );

		expect( queryBuilder( case2 ) ).to.be.equal( 'select countryname, fsi, countrycode, fsi_color from pivot_indicators where year = 1990 order by fsi' );

		expect( queryBuilder( case3 ) ).to.be.equal( 'select countryname, inflation, countrycode, inflation_color from pivot_indicators where year = 1970 order by inflation' );

		expect( queryBuilder( case4 ) ).to.be.equal( 'select countryname, populationgrowth, countrycode, populationgrowth_color from pivot_indicators where year = 2014 order by populationgrowth' );

		expect( queryBuilder( case5 ) ).to.be.equal( 'select countryname, employmentratio, countrycode, employmentratio_color from pivot_indicators where year = 2000 order by employmentratio' );

		expect( queryBuilder( case6 ) ).to.be.equal( 'select countryname, reserves, countrycode, reserves_color from pivot_indicators where year = 1981 order by reserves' );

		expect( queryBuilder( case7 ) ).to.be.equal( 'select countryname, fdi, countrycode, fdi_color from pivot_indicators where year = 1998 order by fdi' );

		expect( queryBuilder( case8 ) ).to.be.equal( 'select countryname, trade, countrycode, trade_color from pivot_indicators where year = 1995 order by trade' );
	} );
});