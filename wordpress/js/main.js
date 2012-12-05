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
		controlNav: true,
		directionNav:false,
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
	jQuery('.celeb-videos li').fitVids();
	
	$('.celeb-videos').flexslider({
		animation:"slide",
		animationLoop: true,
		smoothHeight:true,
		useCSS: false,
		controlNav:false,
		slideshow:false,
		touch:false,
		start: function(slider) {
			$('.celeb-video').not('.clone').each(function(i, t) {
				console.log(t);
				var activeSlide = $(t),
					prevSlide = activeSlide.prev(),
					nextSlide = activeSlide.next(),
					prevVideo = prevSlide.children('.celeb-video-wrap').children('.celeb-video-frame').find('iframe').clone(),
					nextVideo = nextSlide.children('.celeb-video-wrap').children('.celeb-video-frame').find('iframe').clone();
				prevVideo.addClass('previous-iframe');
				nextVideo.addClass('next-iframe');
				var	videoHeight = ($(window).width() * 0.35) * 0.5625;
				console.log(videoHeight);
				prevVideo.css({
					'height': videoHeight,
					'marginTop': -1*(videoHeight/2)
				});
				nextVideo.css({
					'height': videoHeight,
					'marginTop': -1*(videoHeight/2)
				});
				activeSlide.children('.celeb-video-wrap').children('.celeb-video-frame').before($(prevVideo));
				activeSlide.children('.celeb-video-wrap').children('.celeb-video-frame').before('<div class="bg-video-overlay bgvo-left"></div>');
				activeSlide.children('.celeb-video-wrap').children('.celeb-video-frame').before($(nextVideo));
				activeSlide.children('.celeb-video-wrap').children('.celeb-video-frame').before('<div class="bg-video-overlay bgvo-right"></div>');
				$('.bg-video-overlay').css({
					'height': videoHeight,
					'marginTop': -1*(videoHeight/2)
				});
			});
		}
	});
	$(window).resize(function() {
		var	videoHeight = ($(window).width() * 0.35) * 0.5625;
		$('.previous-iframe, .next-iframe, .bg-video-overlay').css({
			'height': videoHeight,
			'marginTop': -1*(videoHeight/2)
		});
	});
	$(".overlay").fancybox({
		type: 'iframe'
	});

	$(".fancybox").fancybox({
		type: 'image'
	});
	$(".lightbox-text").fancybox({
	});

    $('#js-robin-hood-tweets').jTweetsAnywhere({
        username: 'robinhoodnyc',
        count: 3,
        mode: 'auto-insert',
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showActionReply: false,
            showActionRetweet: true,
            showActionFavorite: false
        }
    });

    $('.artists-tweets').jTweetsAnywhere({
        searchParams: ['q=html5'],
    count: 6,
    showTweetFeed: {
    	showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showActionReply: false,
            showActionRetweet: true,
            showActionFavorite: false,
        autorefresh: {
            mode: 'trigger-insert',
            interval: 1
        },
        paging: { mode: 'more' }
    },

    });


$.ajax({
        url: 'http://121212-feed.hdmade.com/results.json',
        dataType: "jsonp",
        jsonp : "parseResponse",
        jsonpCallback: "parseResponse",
        success: function parseResponse(result) {
        var list = $('ul#js-instagram-all li');

       	$.each(list, function(index, value) {
  			$('ul#js-instagram-all li').append('<img src="'+ result[index]['standard_res'] + '" alt="" />');
		});
       }
     });

	$('a.close').click(function() {
		$('.flash').slideUp();
		$.cookie('flash_message', 'hidden');
	});



	if($.cookie('flash_message') == null) {
		$('.flash').show();
	}
	else {
		$('.flash').hide();
	}








    $.ajax({
        url: 'http://121212-feed.hdmade.com/results.json',
        dataType: "jsonp",
        jsonp : "parseResponse",
        jsonpCallback: "parseResponse",
        success: function parseResponse(result) {
        var list = $('ul#js-instagram li');

       	$.each(list, function(index, value) {
  			$('ul#js-instagram li:nth-child('+ (index+1) +') img.photo').attr('src', result[index]['standard_res']);
		});
       }
     });

  setInterval(function() {

    $.ajax({
        url: 'http://121212-feed.hdmade.com/results.json',
        dataType: "jsonp",
        jsonp : "parseResponse",
        jsonpCallback: "parseResponse",
        success: function parseResponse(result) {

        var min = 1;
        var max = $('ul#js-instagram li').size();
        var maxer = 15;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        var randomer = Math.floor(Math.random() * (maxer - min + 1)) + min;

        $('ul#js-instagram li:nth-child('+ random +') img.photo').attr('src', result[randomer]['standard_res']);

       }
     });
    }, 10000);




});


