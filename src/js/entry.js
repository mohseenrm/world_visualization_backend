'use strict';

(() => {
	const get = (url) => {
		return new Promise( ( resolve, reject ) => {
			let request = new XMLHttpRequest();
			request.open( "GET", url );

			request.onload = () => {
				if( request.status == 200 ){
					// request.overrideMimeType( "image/svg+xml" );
					resolve( request );
				}
				else
					reject( Error( request.statusText ) );
			};
			request.onerror = () => {
				reject( Error( "Network Error" ) );
			};

			request.send();
		} );
	};

	// xhr = new XMLHttpRequest();
	// xhr.open("GET", "./images/world.svg", false);
	// xhr.overrideMimeType("image/svg+xml");
	// xhr.send("");

	get('https://rawgit.com/mohseenrm/leet_code/master/world4.svg').then( ( request ) => {
		document.getElementById( "svgContainer" )
				.appendChild( request.responseXML.documentElement );
	}, ( error ) => {
		console.log(`Failed to get resource: ${error}`);
	} );

	let $toggle = $( 'label.toggle' ),
		$svg = $( '#svgContainer' ),
		$slider = $( '.slider-box' ),
		$title = $( '.title' );
	$toggle.on( 'click', ( e ) => {
		// e.preventDefault();
		$svg.toggleClass( 'active' );
		$slider.toggleClass( 'active' );
		$title.toggleClass( 'active' );
	} );
})();