$(document).ready(function() {
	$('.sponsor-banner').simplemarquee({
		speed: 5000,
		direction: 'rtl',
		pause:true
	});
	$('.timer').countdown("2012/12/12 19:00:00", function(event) {
		var $this = $(this);
		switch(event.type) {
			case "seconds":
			case "minutes":
			case "hours":
			case "days":
			case "weeks":
			case "daysLeft":
				$this.find('span#'+event.type).html(event.value);
				break;
			case "finished":
				$this.hide();
				break;
		}
	});

	$('.videos').roundabout({
		minOpacity:1,
		minScale:0.8,
		enableDrag: true
	});

	$(".round-next").click(function() {
		$(".videos").roundabout("animateToNextChild");
		return false;
	});

	$(".round-prev").click(function() {
		$(".videos").roundabout("animateToPreviousChild");
		return false;
	});

	$('.images').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 310,
		controlNav: false,
		directionNav: true,
		slideshow: true,
		useCSS: false,
		touch: false
	});

	var vimeoPlayers = jQuery('.featured-img').find('iframe'), player;

	for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
		player = vimeoPlayers[i];
		$f(player).addEvent('ready', ready);
	}

	function addEvent(element, eventName, callback) {
		if (element.addEventListener) {
			element.addEventListener(eventName, callback, false)
		} else {
			element.attachEvent(eventName, callback, false);
		}
	}

	function ready(player_id) {
		var froogaloop = $f(player_id);
		froogaloop.addEvent('play', function(data) {
			jQuery('.featured-img').flexslider("pause");
		});
		froogaloop.addEvent('pause', function(data) {
			jQuery('.featured-img').flexslider("play");
		});
	}
});

$(window).load(function() {
	jQuery('.featured-img li').fitVids();
	jQuery(".featured-img").flexslider({
		animation: "slide",
		animationLoop: false,
		smoothHeight: true,
		useCSS: false,
		controlNav: false,
		slideshow:true,
		touch: false,
		before: function(slider){
			if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0)
			$f( slider.slides.eq(slider.currentSlide).find('iframe').attr('id') ).api('pause');
		}
	});

	$('.robin-hood-stories').flexslider({
		animation: "slide",
		controlNav: false,
		slideshow: false,
		useCSS: false,
		touch: false
	});

	$('.stories').flexslider({
		animation: "slide",
		itemWidth: 330,
		move:1,
		controlNav: false,
		slideshow: false,
		initDelay: 400,
		useCSS: false,
		touch: false
	});

	$('.twitter').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		slideshow: true,
		initDelay: 2000,
		controlNav:false,
		directionNav:false,
		useCSS: false,
		pauseOnHover: true,
		pauseOnAction: true,
		touch: false
	});

	$(".overlay").fancybox({
		type: 'iframe'
	});

	$(".fancybox").fancybox({
		type: 'image'
	});
	$(".lightbox-text").fancybox({
	});
});
