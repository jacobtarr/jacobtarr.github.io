/* FlowType JS config
=============================== */
$(document).ready(function() {
	$('.header-menu').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 14,
		maxFont   : 18,
		fontRatio : 30
	});
	$('.home-callout h1').flowtype({
		minimum   : 320,
		maximum   : 1020,
		minFont   : 28,
		maxFont   : 48,
		fontRatio : 20
	});
	$('.home-callout p').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 16,
		maxFont   : 20,
		fontRatio : 30
	});
	$('.skills-container h6').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 16,
		maxFont   : 20,
		fontRatio : 20
	});
	$('.contact-form-container p').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 16,
		maxFont   : 22,
		fontRatio : 30
	});
});

/* Initialize Wow.js script
=============================== */
new WOW().init();








