/* FlowType JS config
=============================== */
flowTypeConfig = function() {
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
	$('.work-section h2').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 24,
		maxFont   : 32,
		fontRatio : 20
	});
	$('.project-facts').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 16,
		maxFont   : 22,
		fontRatio : 30
	});
}

/* Initialize FlowType
=============================== */
$(function(){
	flowTypeConfig();
});

/* Initialize Wow.js script
=============================== */
new WOW().init();


/* Set Slick slider settings
=============================== */
slickSliderConfig = function() {

	var projectGalleryArrowPrev = '<a><img class="project-gallery-arrow-prev" src="../img/work/arrow-left-btn.svg"></a>'
	var projectGalleryArrowNext = '<a><img class="project-gallery-arrow-next" src="../img/work/arrow-right-btn.svg"></a>'

	$('.project-gallery').slick({
		speed: 300,
		slide: 'figure',
		fade: true,
		speed: 600,
		cssEase: 'linear',
		prevArrow: projectGalleryArrowPrev,
		nextArrow: projectGalleryArrowNext
	});

	$('.more-projects-gallery').slick({
		speed: 300,
		slide: '.more-projects-gallery-img-container',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: projectGalleryArrowPrev,
		nextArrow: projectGalleryArrowNext,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true
				}
			},
			{
				breakpoint: 410,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	});
}

/* Initialize slider
=============================== */
$(function(){
	slickSliderConfig();
});

/* Load project content
=============================== */

$(function loadProjectContent() {
	var $projectContainer = $('.project-container');
	var $moreProjectsGalleryImageContainer = $('.more-projects-gallery-img-container');
	var $moreProjectsGalleryImage = $('.more-projects-gallery-img-container img');

	// Select specific projects in project-container
	var $projectGregMauz = $('#project-gregmauz');
	var $projectPersonal = $('#project-personal');
	var $projectSyllabus = $('#project-syllabus');

	// Select project thumbnails in more-projects-gallery
	var $thumbnailGregMauz = $('.more-projects-gallery-img-container .thumbnail-gregmauz');
	var $thumbnailPersonal = $('.more-projects-gallery-img-container .thumbnail-personal');
	var $thumbnailSyllabus = $('.more-projects-gallery-img-container .thumbnail-syllabus');

	// Hide the non-default specific projects from DOM
	$projectPersonal.hide();
	$projectSyllabus.hide();

	// Function for animating scroll
	animateScroll = function(element) {
		$('html, body').animate({
			scrollTop: $(element).offset().top
		});
	}
	
	// When user clicks Greg Mauz thumbnail image
	$thumbnailGregMauz.on("click", function(){
		$projectContainer.children().hide();
		$projectGregMauz.fadeIn(1100).show();
		$('.project-gallery').unslick();
		slickSliderConfig();
		flowTypeConfig();
		animateScroll('#project-gregmauz');
	});

	// When user clicks Personal thumbnail image
	$thumbnailPersonal.on("click", function(){
		$projectContainer.children().hide();
		$projectPersonal.fadeIn(1100).show();
		$('.project-gallery').unslick();
		slickSliderConfig();
		flowTypeConfig();
		animateScroll('#project-personal');
	});

	// When user clicks Syllabus thumbnail image
	$thumbnailSyllabus.on("click", function(){
		$projectContainer.children().hide();
		$projectSyllabus.fadeIn(1100).show();
		$('.project-gallery').unslick();
		slickSliderConfig();
		flowTypeConfig();
		animateScroll('#project-syllabus');
	});

});







