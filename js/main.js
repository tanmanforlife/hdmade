
$(document).ready(function() {
	

        $('.sponsor-banner').simplemarquee({
		speed: 5000,
		direction: 'rtl',
		pause:true
    });

    // Countdown Timer
                    var sinceYear = new Date('01/01/2005');

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
                timerFinished();
            break;


		}
	});

    function timerFinished() {
       // Other code for timer finished and the countup timer is in plugin js

       $('.timer').attr('id', 'countup');

    }
    

    // Vimeo API 
    var vimeoPlayers = jQuery('.featured-img').find('iframe'),
        player;

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
        froogaloop.addEvent('play', function (data) {
            jQuery('.featured-img').flexslider("pause");
        });
        froogaloop.addEvent('pause', function (data) {
            jQuery('.featured-img').flexslider("play");
        });
    }

    $(".donate-modal-link").fancybox({
            type: 'inline',
            closeBtn: true,
            wrapCSS: 'donate-modal',
            tpl: { closeBtn : '<a title="Close" class="modal-close" href="javascript:;">x</a>' }
    });
    
    $('.amounts input[type=radio]').click(function(){
       $('#donate-popup .error').html('');
       var kale = $(this).val();
       if(kale != 'custom'){            
            $('.amounts input.custom').removeAttr('checked');
            $('.amounts input[type=text]').css('color', '#fff');
       }
       else{           
           $('.amounts input.amount').removeAttr('checked');
           $('.amounts input[type=text]').css('color', '#000');
       }
          
    });
    $('#amazon_amount').focus(function(){
        $('.amounts .custom').click();
    })
    $('#donate-form').submit(function(){
        if($('.amount').is(':checked') || $.isNumeric($('#amazon_amount').val())){
            return true;
        }
        else {
            $('#donate-popup .error').html('Please select or enter an amount');
            return false;
        }
    })
    
    


});  // End Doc Ready


$(window).load(function () {

 


    // Featured Image Carousel Options
    jQuery('.featured-img li').fitVids();
    jQuery(".featured-img").flexslider({
        animation: "slide",
        animationLoop: false,
        smoothHeight: true,
        useCSS: false,
        controlNav: true,
        directionNav: true,
        slideshow: true,
        touch: false,
        before: function (slider) {
            if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) $f(slider.slides.eq(slider.currentSlide).find('iframe').attr('id')).api('pause');
        }
    });

	// Celev Videos Slider Options
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
				var activeSlide = $(t),
					prevSlide = activeSlide.prev(),
					nextSlide = activeSlide.next(),
					prevVideo = prevSlide.children('.celeb-video-wrap').children('.celeb-video-frame').find('iframe').clone(),
					nextVideo = nextSlide.children('.celeb-video-wrap').children('.celeb-video-frame').find('iframe').clone();
				prevVideo.addClass('previous-iframe');
				nextVideo.addClass('next-iframe');
				var	videoHeight = ($(window).width() * 0.35) * 0.5625;
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
	
    //Robin Hood Twitter Feed 
    $('#js-robin-hood-tweets').jTweetsAnywhere({
        username: 'robinhoodnyc',
        count: 3,
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showActionReply: false,
            showActionRetweet: true,
            showActionFavorite: false,
        },
        autorefresh: {
            mode: 'trigger-insert',
            interval: 600
        },

        tweetFilter: function (tweet, options) {
            if (tweet && tweet.text) {
                var text = tweet.text;

                if (!text.match(/#121212concert/i)) {
                    return false;
                }
                return true;
            }
            return false;
        }
    });

    // Artists Twitter Feed and Slider 
    $('.artists-tweets').jTweetsAnywhere({
        username: '121212concert',  // Usage: For more than one Twitter feed - ['handle1' , 'handle2' , 'handle3'] etc.  
        count: 6,
        showTweetFeed: {
            showProfileImages: true,
            showUserScreenNames: true,
            showUserFullNames: true,
            showActionReply: false,
            showActionRetweet: true,
            showActionFavorite: false,
       		autorefresh: {
		        mode: 'trigger-insert',
		      	interval: 30,
				duration:-1
			},
			paging: {
				mode: 'more'
			}
		},
	//	_tweetFeedIndicator: '.artists-tweets .jta-tweet-list',
		isArtistsFeed: true,
		tweetFeedDecorator: function() {
			return '<div class="jta-tweet-flexslider"><ul class="jta-tweet-list"></ul></div>';
		},
		customTweetElement: $('.jta-tweet-flexslider .jta-tweet-list'),
    	onReadyHandler: function() {
	
			$('.jta-tweet-flexslider').flexslider({
				animation: "slide",
				selector: ".jta-tweet-list > li",
				controlNav:false,
				itemWidth: 333,
				itemMargin:0,
				minItems:1,
				maxItems:3,
				move:1
			});
			
    	},
        onFeedPopulationHandler: function(invocations)
        {
        	var tweets_html = $('.jta-tweet-flexslider .flex-viewport .jta-tweet-list').html();
			console.log('updated');
			$('.jta-tweet-flexslider').remove();
			$('.artists-tweets .jta-tweet-list-controls').before('<div class="jta-tweet-flexslider"></div>');
			tweets_html = '<ul class="jta-tweet-list">' + tweets_html + '</ul>';
			$('.jta-tweet-flexslider').css('opacity', 0).html(tweets_html);
			$('.jta-tweet-flexslider').flexslider({
				animation: "slide",
				selector: ".jta-tweet-list > li",
				controlNav:false,
				itemWidth: 333,
				itemMargin:0,
				minItems:1,
				maxItems:3,
				move:1
			}).css('opacity', 1);
        },
        tweetFilter: function (tweet, options) {
            if (tweet && tweet.text) {
                var text = tweet.text;

                if (!text.match(/#121212concert/i)) {
                    return false;
                }
                return true;
            }
            return false;
        }


    });

    // Instagram
    /*var limit = 14;
    $.ajax({
        url: 'http://121212-feed.hdmade.com/results.json',
        dataType: "jsonp",
        jsonp: "parseResponse",
        jsonpCallback: "parseResponse",
        success: function parseResponse(result) {
            var list = $('ul#js-instagram-all li');
            limit = 14;
            $.each(result, function (index, value) {
                if (index > limit) {
                    return false;
                } else {
                    $('ul#js-instagram-all').append('<li><a href="'+ result[index]['standard_res'] +'"><img src="' + result[index]['standard_res'] + '" alt="" /></a></li>');
                }
            });
        }
    });


    function getPropertyCount(obj) {
        var count = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $.ajax({
                url: 'http://121212-feed.hdmade.com/results.json',
                dataType: "jsonp",
                jsonp: "parseResponse",
                jsonpCallback: "parseResponse",
                success: function parseResponse(result) {
                    var list = $('ul#js-instagram-all li');

                    for (var i = limit; i < limit + 15; i++) {
                        $('ul#js-instagram-all').append('<a href="'+ result[limit]['standard_res'] +'"><li><img src="' + result[i]['standard_res'] + '" alt="" /></a></li>');
                    }
                }
            });
            limit += 15;
        }
    });*/

    // Flash Message Close
    $('a.close').click(function (event) {
    	event.preventDefault();
        $('.flash').slideUp();
    });

    $.ajax({
        url: 'http://121212-feed.hdmade.com/results.json',
        dataType: "jsonp",
        jsonp: "parseResponse",
        jsonpCallback: "parseResponse",
        success: function parseResponse(result) {
            var list = $('ul#js-instagram li');


            $.each(list, function (index, value) {
            	$('ul#js-instagram li:nth-child('+ (index + 1) +') a.insta-link').attr('href', result[index]['standard_res']);
                $('ul#js-instagram li:nth-child(' + (index + 1) + ') img.photo').attr('src', result[index]['standard_res']);
            });
        }
    });

    setInterval(function () {

        $.ajax({
            url: 'http://121212-feed.hdmade.com/results.json',
            dataType: "jsonp",
            jsonp: "parseResponse",
            jsonpCallback: "parseResponse",
            success: function parseResponse(result) {

                var min = 1;
                var max = $('ul#js-instagram li').size();
                var maxer = 15;
                var random = Math.floor(Math.random() * (max - min + 1)) + min;
                var randomer = Math.floor(Math.random() * (maxer - min + 1)) + min;

                $('ul#js-instagram li:nth-child(' + random + ') img.photo').fadeOut(function() {
                	$('ul#js-instagram li:nth-child(' + random + ') img.photo').attr('src', result[randomer]['standard_res']).fadeIn();
            	});


            }
        });
    }, 10000);
});
