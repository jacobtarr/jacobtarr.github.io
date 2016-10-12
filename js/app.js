/* FlowType JS config
=============================== */
flowTypeConfig = function() {
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
	$('.skills-section__content--skill-container h6').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 16,
		maxFont   : 20,
		fontRatio : 20
	});
	$('.contact-section p').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 16,
		maxFont   : 22,
		fontRatio : 30
	});
	$('.project-info').flowtype({
		minimum   : 320,
		maximum   : 768,
		minFont   : 16,
		maxFont   : 20,
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

	var projectGalleryArrowPrev = '<a><img class="project-gallery__arrow--prev" src="../img/work/arrow-left-btn.svg"></a>'
	var projectGalleryArrowNext = '<a><img class="project-gallery__arrow--next" src="../img/work/arrow-right-btn.svg"></a>'

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
		slide: '.more-projects-gallery__thumbnail',
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

loadProjectContent = function() {
	var $projectContainer = $('.project-container');
	var $moreProjectsGalleryImageContainer = $('.more-projects-gallery__thumbnail');
	var $moreProjectsGalleryImage = $('.more-projects-gallery__thumbnail img');

	// Select specific projects in project-container
	var $projectGregMauz = $('#project-gregmauz');
	var $projectPersonal = $('#project-personal');
	var $projectSyllabus = $('#project-syllabus');
	var $projectLemur = $('#project-lemur');

	// Select project thumbnails in more-projects-gallery
	var $thumbnailGregMauz = $('.more-projects-gallery__thumbnail--gregmauz');
	var $thumbnailPersonal = $('.more-projects-gallery__thumbnail--personal');
	var $thumbnailSyllabus = $('.more-projects-gallery__thumbnail--syllabus');
	var $thumbnailLemur = $('.more-projects-gallery__thumbnail--lemur');

	// Hide the non-default specific projects from DOM
	$projectPersonal.hide();
	$projectSyllabus.hide();
	$projectLemur.hide();

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

	// When user clicks Lemur thumbnail image
	$thumbnailLemur.on("click", function(){
		$projectContainer.children().hide();
		$projectLemur.fadeIn(1100).show();
		$('.project-gallery').unslick();
		slickSliderConfig();
		flowTypeConfig();
		animateScroll('#project-lemur');
	});

	

}

/* Initialize project content
=============================== */
$(function(){
	loadProjectContent();
});







