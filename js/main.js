(function ($, window, undefined) {
    window.parseResponse = function(data) {
        return $.parseJSON(data);
    };
})(jQuery, window);


$(document).ready(function() {
	    // Countdown Timer
   	var sinceYear = new Date('01/01/2005');

	$('#timer-until-event').countdown("2012/12/12 19:30:00", function(event) {
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
		$('#timer-until-event').addClass('visuallyhidden');
		$('#timer-event').removeClass('visuallyhidden');
		$('#timer-event').countUp({
			'lang':'en',
			'format':'full',
			'sinceDate': '12/12/2012-19:30:00'
		});
    }



    // Vimeo API
    var vimeoPlayers = jQuery('.featured-img').find('iframe[data-vimeo="true"]'),
        player;

    for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
        player = vimeoPlayers[i];
		$f(player).addEvent('ready', function() {
			$f(player).addEvent('pause', function(data) {
				$('.featured-img').flexslider("play");
			})
			$f(player).addEvent('play', function(data) {
				$('.featured-img').flexslider("pause");
			})
		});
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
            openEffect: 'none',
            tpl: { closeBtn : '<a title="Close" class="modal-close" href="javascript:;">x</a>' }
    });

    $(".text-to-give-modal-link").fancybox({
            type: 'inline',
            closeBtn: true,
            wrapCSS: 'text-to-give-modal',
            openEffect: 'none',
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
    $('.jta-tweet-action-retweet a').live('click', function(){
        popup($(this).attr('href'), 'twitterwin');
        return false;
    })
    $('.nav .share a').click(function(){
        popup($(this).attr('href'), 'socialwin');
        return false;
    });

});  // End Doc Ready


$(window).load(function () {
	if($("html").hasClass('lt-ie9')) {
		$('.top').css( "background-size", "cover" );
	}
	$('.sponsor-banner').flexslider({
		animation:"fade",
		animationLoop:true,
		controlNav:false,
		directionNav:true,
		slideshow:true,
		itemWidth: 200,
		itemMargin:0,
		minItems:1,
		maxItems:5,
		move:1
	});
	var vim_players = $('.featured-img iframe[data-vimeo="true"]');
    // Featured Image Carousel Options
    jQuery('.featured-img li').fitVids();
	if(navigator.userAgent.match(/iPhone/i)) {
		var featuredAnimationType = "fade";
	} else {
		var featuredAnimationType = "slide";
	}
    jQuery(".featured-img").flexslider({
        animation: featuredAnimationType,
        animationLoop: true,
        smoothHeight: true,
        useCSS: false,
        controlNav: false,
        directionNav: true,
        slideshow: true,
		slideshowSpeed: 5000,
        touch: true,
        start: function(slider) {
			$('.twitter-wrap').height(slider.height());
        },
        before: function (slider) {
			for (var i = 0, length = vim_players.length; i < length; i++) {
				player = vim_players[i];
				$f(player).api('pause');
			}
        },
        after: function (slider) {
			$('.twitter-wrap').height(slider.slides.eq(slider.currentSlide).height());
			/*var th = 150;
			$('.twitter-wrap li').each(function(index, value){
				th = th + $(this).height();
				if(th > slider.slides.eq(slider.currentSlide).height())
					$(this).hide();
				else
					$(this).show();
			});*/
        }
    });

	// Tumblr Flexslider
	jQuery(".stories").flexslider({
            animation: "slide",
            animationLoop: false,
            smoothHeight: true,
            useCSS: true,
            controlNav: false,
            directionNav: true,
            slideshow: false,
            slideshowSpeed: 5000,
            touch: true
        });

	// Celev Videos Slider Options
	jQuery('.celeb-videos li').fitVids();
	var celeb_players = $('.celeb-videos iframe');
	/*
	$(document).on('click', '.celeb-video-frame span', function(e) {
		var t = $(this),
			iframe = t.siblings().children('iframe');
		if(t.hasClass('paused')) {
			for (var i = 0, length = iframe.length; i < length; i++) {
				player = iframe[i];
				$f(player).api('play');
			}
			t.removeClass('paused');
		} else {
			for (var i = 0, length = iframe.length; i < length; i++) {
				player = iframe[i];
				$f(player).api('pause');
			}
			t.addClass('paused');
		}

	});
	*/
	var celebAnimation = "fade";
	if((navigator.userAgent.match(/iPad/i))) {
		celebAnimation = "slide";
	}
	$('.celeb-videos').flexslider({
		animation:celebAnimation,
		animationLoop: true,
		smoothHeight:true,
		useCSS: false,
		controlNav:false,
		slideshow:false,
		touch:true,
		start: function(slider) {
			if(celebAnimation == "fade") {
				$('.celeb-video').not('.clone').each(function(i, t) {
					var activeSlide = $(t),
						prevSlide = activeSlide.prev(),
						nextSlide = activeSlide.next();
					if(!prevSlide.length) {
						prevSlide = $('.celeb-video').eq(($('.celeb-video').size())-1);
					}
					if(!nextSlide.length) {
						nextSlide = $(".celeb-video").eq(0);
					}

					var	prevVideo = prevSlide.children('.celeb-video-wrap').children('.celeb-video-frame').find('iframe').clone(),
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
		},
		before: function(slider) {
			for (var i = 0, length = celeb_players.length; i < length; i++) {
				player = celeb_players[i];
				$f(player).api('pause');
			}
		}
	});
	$(window).resize(function() {
		if(celebAnimation == "fade") {
			var	videoHeight = ($(window).width() * 0.35) * 0.5625;
			$('.previous-iframe, .next-iframe, .bg-video-overlay').css({
				'height': videoHeight,
				'marginTop': -1*(videoHeight/2)
			});
		}
	});
	$(document).on('click', '.celeb-videos .bgvo-left', function(e) {
		var t = $(this),
			i = t.parent().parent().index(),
			size = $('.celeb-video').size(),
			goToSlide;
		if(i == 0) {
			goToSlide = size-1;
		} else {
			goToSlide = i-1;
		}
		var cvs = $('.celeb-videos').data('flexslider')
		cvs.flexslider(goToSlide);
	});
	$(document).on('click', '.celeb-videos .bgvo-right', function(e) {
		var t = $(this),
			i = t.parent().parent().index(),
			size = $('.celeb-video').size(),
			goToSlide;
		if(i == size-1) {
			goToSlide = 0;
		} else {
			goToSlide = i+1;
		}
		var cvs = $('.celeb-videos').data('flexslider')
		cvs.flexslider(goToSlide);
	});


    function getBannerText(){
        $.ajax({
            url: '/social/topalert.json',
            type: 'GET',
            dataType: 'jsonp',
            jsonpCallback: "rseBannerText",
            cache: true,
            ifModified: true,
            success: function(data, textStatus, xhr) {
                 //if(data.hasOwnProperty('banner_text'))
				$(document).ready(function(){
					$('.flash .close').removeClass('visuallyhidden');
					$('.flash p').html(data.banner_text)
				});
            },
            error : function(httpReq,status,exception){
                console.log(status+" "+exception);
            }

        });
    }
	getBannerText();
	window.onorientationchange = detectIPadOrientation;
	function detectIPadOrientation() {
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
			if ( orientation == 0 ) {
				return 'portrait';
			}
			else if ( orientation == 90 ) {
				return 'landscape';
			}
			else if ( orientation == -90 ) {
				return 'landscape';
			}
			else if ( orientation == 180 ) {
				return 'portrait';
			}
		}
	}
	var tweet_width,
		move_amount = 3;
	if(detectIPadOrientation() == 'portrait') {
		tweet_width = 349;
		move_amount = 2;
	} else if(detectIPadOrientation() == 'landscape') {
		tweet_width = 308;
	} else if ($(window).width > 321 && $(window).width() < 655) {
		tweet_width = 320;
	} else {
		tweet_width = 320;
	}
	//Robin Hood Twitter Feed
     $.ajax({
        url: '/social/robinhood.json?callback=parseResult',
        //url: 'json/robinhood.json',
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: "parseResult",
        cache: true,
        ifModified: true,
        success: function(data, textStatus, xhr) {
             var items = [];
              $.each(data, function(i, tweet) {
                    if(i>1) return false;
                    var timeago = parseTwitterDate(tweet.created_at);
                    items.push('<li class="jta-tweet-list-item cf"><div class="jta-tweet-body "><span class="jta-tweet-text">' + decorateLinks(tweet.text) + '</span><span class="jta-tweet-attributes"><span class="timeago" title="'+tweet.created_at+'">'+timeago+'</span></span><span class="jta-tweet-actions"><span class="jta-tweet-action-retweet"><a href="https://twitter.com/intent/retweet?tweet_id='+tweet.id_str+'" target=_blank>Retweet</a></span></div><div class="jta-clear">&nbsp;</div></li>');
              });

              $('<ul/>', {
                    'class': 'jta-tweet-list',
                    html: items.join('')
              }).appendTo('#js-robin-hood-tweets');

        },
        error : function(httpReq,status,exception){
            console.log(status+" "+exception);
        },
        complete : function(){
            $.ajax({
                url: '/social/favs.json',
                type: 'GET',
                dataType: 'jsonp',
                jsonpCallback: "parseResult",
                cache: true,
                ifModified: true,
                success: function(data, textStatus, xhr) {
                     var items = [];
                      $.each(data, function(i, tweet) {
                            var timeago = parseTwitterDate(tweet.created_at);
                            items.push('<li class="jta-tweet-list-item cf"><div class="jta-tweet-profile-image"><a class="jta-tweet-profile-image-link" href="http://twitter.com/'+tweet.from_user+'" target="_blank"><img src="'+tweet.profile_image_url+'" alt="'+tweet.from_user+'" title="'+tweet.from_user_name+'"></a></div><div class="jta-tweet-body jta-tweet-body-list-profile-image-present"><span class="jta-tweet-text"><span class="jta-tweet-user-name"><span class="jta-tweet-user-screen-name"><a class="jta-tweet-user-screen-name-link" href="http://twitter.com/'+tweet.from_user_name+'" target="_blank">'+tweet.from_user_name+'</a></span><span class="jta-tweet-user-full-name"><a class="jta-tweet-user-full-name-link" href="http://twitter.com/'+tweet.from_user+'" name="'+tweet.from_user+'" target="_blank">'+tweet.from_user_name+'</a></span></span>'+decorateLinks(tweet.text)+'</div><span class="jta-tweet-attributes"><span class="timeago" title="'+tweet.created_at+'">'+timeago+'</span></span><span class="jta-tweet-actions"><span class="jta-tweet-action-retweet"><a href="https://twitter.com/intent/retweet?tweet_id='+tweet.id_str+'" target=_blank>Retweet</a></span></span></span><div class="jta-clear">&nbsp;</div></li>');
                      });
                      $('<div/>', {
                            'class' : 'jta-tweet-flexslider'
                      }).appendTo('.artists-tweets');
                      $('<ul/>', {
                            'class': 'jta-tweet-list cf',
                            html: items.join('')
                      }).appendTo('.jta-tweet-flexslider');
                      $('.jta-tweet-flexslider').flexslider({
                            animation: "slide",
                            selector: ".jta-tweet-list > li",
                            controlNav:false,
                            itemWidth: tweet_width,
                            itemMargin:0,
                            minItems:1,
                            maxItems:move_amount,
                            slideshow:false,
							animationLoop:false,
                            move:1
                    });
                },
                error : function(httpReq,status,exception){
                    console.log(status+" "+exception);
                }

            });
        }

    });

	$(document).on('click', '.jta-tweet-list-autorefresh-trigger', function(e) {
		$(this).remove();

	})

    // Instagram
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



    // Flash Message Close
    $('a.close').click(function (event) {
		$('.flash').toggleClass('closed');
		if($('.flash').hasClass('closed')) {
			$('.flash .close').html('Expand');
			$('.flash p').slideUp(100);
		} else {
			$('.flash .close').html('<span>x</span>');
			$('.flash p').slideDown(100);
		}
    	event.preventDefault();
    });

    // Homepage
    /**
     * Trigger updates to banner text and instagram social feeds.
     */
    var instagram_data = '';
    function updateFeeds() {
        getBannerText();

        $.ajax({
            url: '/social/instagram.json',
            dataType: "jsonp",
            jsonp: false,
            jsonpCallback: "parseResponse",
            cache: true,
            ifModified: true,
            success: function(result, textStatus, xhr) {

                /*var min = 1;
                var max = $('ul#js-instagram li').size();
                var maxer = 15;
                var random = Math.floor(Math.random() * (max - min + 1)) + min;
                var randomer = Math.floor(Math.random() * (maxer - min + 1)) + min;

                $('ul#js-instagram li:nth-child(' + random + ') img.photo').fadeOut(function() {
                        $('ul#js-instagram li:nth-child(' + random + ') img.photo').attr('src', result[randomer]['standard_res']).fadeIn();
                });*/
                if(result)
                    instagram_data = result;

                // requeue update
                setTimeout(updateFeeds, 2000);
            }
        });
    }
	function in_array(needle, haystack) {
		var length = haystack.length;
		for (var i = 0; i < length; i++) {
			if(haystack[i] == needle) return true;
		}
		return false;
	}
	function makeRandom(max, min, haystack) {
		var needle = Math.floor(Math.random() * (max - min + 1)) + min;
		if(in_array(needle, haystack)) {
			makeRandom(max, min, haystack);
		} else {
			return needle;
		}
	}
    function randomPic() {
		var min_li = 1,
			max_li = $('ul#js-instagram li').size(),
			upper = 15,
			lower = 0,
			current_ids = [],
			random_li = Math.floor(Math.random()*(max_li - min_li + 1)) + min_li;
		$('#js-instagram li').each(function(idx, t) {
			var id = $(t).attr('data-photo-id');
			current_ids.push(parseInt(id));
		});
		while(current_ids.length <= max_li+1) {
			var random_number = Math.round(Math.random()*(upper - lower + 1) + lower);
			if (current_ids.indexOf(random_number) == -1) {
				current_ids.push(random_number);
			}
		}
		var randomer = current_ids[current_ids.length-1];

		if(instagram_data[randomer]){
			$('ul#js-instagram li:nth-child('+ (random_li) +')').attr('data-photo-id', randomer);
            $('ul#js-instagram li:nth-child(' + random_li + ') img.photo').fadeOut(function() {
                $('ul#js-instagram li:nth-child(' + random_li + ') a').attr('href', instagram_data[randomer]['permalink']);
                $('ul#js-instagram li:nth-child(' + random_li + ') img.photo').attr('src', instagram_data[randomer]['standard_res']).fadeIn();
            });
        }
    }
    setInterval(randomPic, 5000);
    if($('#js-instagram').length){
        $.ajax({
            url: '/social/instagram.json',
            dataType: "jsonp",
            jsonp: false,
            jsonpCallback: "parseResponse",
            cache: true,
            ifModified: true,
            success: function(result, textStatus, xhr) {
                var list = $('ul#js-instagram li');
                instagram_data = result;

                $.each(list, function (index, value) {
					$('ul#js-instagram li:nth-child('+ (index + 1) +')').attr('data-photo-id', index);
                    $('ul#js-instagram li:nth-child('+ (index + 1) +') a.insta-link').attr({'href': result[index]['permalink'], 'target': '_blank'});
                    $('ul#js-instagram li:nth-child(' + (index + 1) + ') img.photo').attr('src', result[index]['standard_res']);
                });
            }
        });

        // queue first update to banner text and instagram
        setTimeout(updateFeeds, 2000);
    }
    // Instagram.php only
    if($('#js-instagram-all').length){
        var limit = 14;
        $.ajax({
            url: '/social/instagram.json',
            dataType: "jsonp",
            jsonpCallback: "parseResponse",
            cache: true,
            ifModified: true,
            success: function(result, textStatus, xhr) {
                var list = $('ul#js-instagram-all li');
                limit = 14;
                $.each(result, function (index, value) {
                    if (index > limit) {
                        return false;
                    } else {
                        $('ul#js-instagram-all').append('<li><a href="'+ result[index]['permalink'] +'" target="_blank"><img src="' + result[index]['standard_res'] + '" alt="" /></a></li>');
                    }
                });
            }
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                $.ajax({
                    url: '/social/instagram.json',
                    dataType: "jsonp",
                    jsonpCallback: "parseResponse",
                    cache: true,
                    ifModified: true,
                    success: function(result, textStatus, xhr) {
                        var list = $('ul#js-instagram-all li');
                        for (var i = limit; i < limit + 15; i++) {
                            if(result && result[i]){
                                $('ul#js-instagram-all').append('<a href="'+ result[i]['permalink'] +'" target="_blank"><li><img src="' + result[i]['standard_res'] + '" alt="" /></a></li>');
                                limit++;
                            }
                        }
                    }
                });
            }
        });
    }
});
// Twitter helpers
function decorateLinks(text)
{
        /** the regex to markup links */
        var decorated = text.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1" class="jta-tweet-a jta-tweet-link" target="_blank" rel="nofollow">$1<\/a>');
        decorated = decorated.replace(/\B@(\w+)/gi,'@<a href="http://twitter.com/$1" class="jta-tweet-a twitter-anywhere-user" target="_blank" rel="nofollow">$1<\/a>');
        decorated = decorated.replace(/#([a-zA-Z0-9_]+)/gi,'<a href="http://search.twitter.com/search?q=%23$1" class="jta-tweet-a jta-tweet-hashtag" title="#$1" target="_blank" rel="nofollow">#$1<\/a>');

        return decorated;
}
function relative_time(date_str) {
    if (!date_str) {return;}
    date_str = $.trim(date_str);
    date_str = date_str.replace(/\.\d\d\d+/,""); // remove the milliseconds
    date_str = date_str.replace(/-/,"/").replace(/-/,"/"); //substitute - with /
    date_str = date_str.replace(/T/," ").replace(/Z/," UTC"); //remove T and substitute Z with UTC
    date_str = date_str.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // +08:00 -> +0800
    var parsed_date = new Date(date_str);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date(); //defines relative to what ..default is now
    var delta = parseInt((relative_to.getTime()-parsed_date)/1000);
    delta=(delta<2)?2:delta;
    var r = '';
    if (delta < 60) {
    r = delta + ' seconds ago';
    } else if(delta < 120) {
    r = '1 minute ago';
    } else if(delta < (45*60)) {
    r = (parseInt(delta / 60, 10)).toString() + ' minutes ago';
    } else if(delta < (2*60*60)) {
    r = '1 hour ago';
    } else if(delta < (24*60*60)) {
    r = '' + (parseInt(delta / 3600, 10)).toString() + ' hours ago';
    } else if(delta < (48*60*60)) {
    r = '1 day ago';
    } else {
    r = (parseInt(delta / 86400, 10)).toString() + ' days ago';
    }
    return  r;
};

function popup(url, target)
{
    mywindow = window.open(url, target, "location=0,toolbar=0,status=1,scrollbars=1,  width=500,height=400");
    mywindow.moveTo(0, 0);
}

function parseTwitterDate(tdate) {
    var system_date = new Date(Date.parse(tdate));
    var user_date = new Date();
    if (K.ie) {
        system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
        return '';
    }
    var diff = Math.floor((user_date - system_date) / 1000);
    if (diff <= 1) {return "just now";}
    if (diff < 20) {return diff + " seconds ago";}
    if (diff < 40) {return "half a minute ago";}
    if (diff < 60) {return "less than a minute ago";}
    if (diff <= 90) {return "one minute ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
    if (diff <= 5400) {return "1 hour ago";}
    if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
    if (diff <= 129600) {return "1 day ago";}
    if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
    if (diff <= 777600) {return "1 week ago";}
    return "on " + system_date;
}

// from http://widgets.twimg.com/j/1/widget.js
var K = function () {
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
}();
