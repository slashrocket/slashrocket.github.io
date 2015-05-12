/**
 * The nav stuff
 */
(function( window ){
	
	'use strict';

	var body = document.body,
		mask = document.createElement("div"),
		toggleSlideLeftRuby = document.querySelector( ".toggle-slide-left-ruby" ),
		toggleSlideLeftPython = document.querySelector( ".toggle-slide-left-python" ),
		toggleSlideLeftCPlusPlus = document.querySelector( ".toggle-slide-left-cplusplus" ),
		activeNav
	;
	mask.className = "mask";

	/* slide menu left */
	toggleSlideLeftRuby.addEventListener( "click", function(){
		classie.add( body, "sml-open-ruby" );
		document.body.appendChild(mask);
		activeNav = "sml-open-ruby";
	} );
	toggleSlideLeftPython.addEventListener( "click", function(){
		classie.add( body, "sml-open-python" );
		document.body.appendChild(mask);
		activeNav = "sml-open-python";
	} );
	toggleSlideLeftCPlusPlus.addEventListener( "click", function(){
		classie.add( body, "sml-open-cplusplus" );
		document.body.appendChild(mask);
		activeNav = "sml-open-cplusplus";
	} );


	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});


})( window );