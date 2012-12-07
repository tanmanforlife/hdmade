
$(document).ready(function() {
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

    // Featured Image Carousel Options
    jQuery('.featured-img li').fitVids();

    jQuery(".featured-img").flexslider({
        animation: "slide",
        animationLoop: true,
        smoothHeight: true,
        useCSS: false,
        controlNav: false,
        directionNav: true,
        slideshow: true,
		slideshowSpeed: 5000,
        touch: false,
        before: function (slider) {
            if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) $f(slider.slides.eq(slider.currentSlide).find('iframe').attr('id')).api('pause');
        }
    }); 

	// Tumblr Flexslider
	jQuery(".stories").flexslider({
        animation: "slide",
        animationLoop: false,
        smoothHeight: true,
        useCSS: false,
        controlNav: false,
        directionNav: true,
        slideshow: true,
		slideshowSpeed: 5000,
        touch: false,
    });

	// Celev Videos Slider Options
	jQuery('.celeb-videos li').fitVids();
	
	$('.celeb-videos').flexslider({
		animation:"fade", 
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
	});
	$(window).resize(function() {
		var	videoHeight = ($(window).width() * 0.35) * 0.5625;
		$('.previous-iframe, .next-iframe, .bg-video-overlay').css({
			'height': videoHeight,
			'marginTop': -1*(videoHeight/2)
		});
	});

       $('.tumblr-feed .stories').flexslider({
		animation:"slide",
		animationLoop: true,
                controlNav: false
       });

    //Robin Hood Twitter Feed
     $.ajax({
        //url: 'http://50.57.202.190:8080/social/robinhood.json?callback=parseRes',
        url: 'json/robinhood_1.json?callback=parseRes',
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: "parseRes",
        success: function(data, textStatus, xhr) {
             var items = [];
              $.each(data, function(i, tweet) {
                    var timeago = relative_time(tweet.created_at);
                    items.push('<li class="jta-tweet-list-item"><div class="jta-tweet-body "><span class="jta-tweet-text">' + decorateLinks(tweet.text) + '</span><span class="jta-tweet-attributes"><span class="timeago" title="'+tweet.created_at+'">'+timeago+'</span></span><span class="jta-tweet-actions"><span class="jta-tweet-action-retweet"><a href="https://twitter.com/intent/retweet?tweet_id='+tweet.id+'">Retweet</a></span></div><div class="jta-clear">&nbsp;</div></li>');
              });

              $('<ul/>', {
                    'class': 'jta-tweet-list',
                    html: items.join('')
              }).appendTo('#js-robin-hood-tweets');
        },
        error : function(httpReq,status,exception){
            console.log(status+" "+exception);
        }

    });

    $.ajax({
        //url: 'http://50.57.202.190:8080/social/robinhood.json?callback=parseRes',
        url: 'json/artists.json?callback=parseArtistTweets',
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: "parseArtistTweets",
        success: function(data, textStatus, xhr) {
             var items = [];
              $.each(data, function(i, tweet) {
                    var timeago = relative_time(tweet.created_at);
                    items.push('<li class="jta-tweet-list-item"><div class="jta-tweet-profile-image"><a class="jta-tweet-profile-image-link" href="http://twitter.com/'+tweet.from_user+'" target="_blank"><img src="'+tweet.profile_image_url+'" alt="'+tweet.from_user+'" title="'+tweet.from_user_name+'"></a></div><div class="jta-tweet-body jta-tweet-body-list-profile-image-present"><span class="jta-tweet-text"><span class="jta-tweet-user-name"><span class="jta-tweet-user-screen-name"><a class="jta-tweet-user-screen-name-link" href="http://twitter.com/'+tweet.from_user_name+'" target="_blank">'+tweet.from_user_name+'</a></span><span class="jta-tweet-user-full-name"><a class="jta-tweet-user-full-name-link" href="http://twitter.com/'+tweet.from_user+'" name="'+tweet.from_user+'" target="_blank">'+tweet.from_user_name+'</a></span></span>'+decorateLinks(tweet.text)+'<span class="jta-tweet-attributes"><span class="timeago" title="'+tweet.created_at+'">'+timeago+'</span></span><span class="jta-tweet-actions"><span class="jta-tweet-action-retweet"><a href="https://twitter.com/intent/retweet?tweet_id='+tweet.id+'">Retweet</a></span></span></span></div><div class="jta-clear">&nbsp;</div></li>');
              });
              $('<div/>', {
                    'class' : 'jta-tweet-flexslider'
              }).appendTo('.artists-tweets');
              $('<ul/>', {
                    'class': 'jta-tweet-list',
                    html: items.join('')
              }).appendTo('.jta-tweet-flexslider');
              $('.jta-tweet-flexslider').flexslider({
                    animation: "slide",
                    selector: ".jta-tweet-list > li",
                    controlNav:false,
                    itemWidth: 333,
                    itemMargin:0,
                    minItems:1,
                    maxItems:3,
                    slideshow:false,
                    move:1
            });
        },
        error : function(httpReq,status,exception){
            console.log(status+" "+exception);
        }

    });
    
    /*$('#js-robin-hood-tweets').jTweetsAnywhere({
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
				slideshow:false,
				move:1
			});
			
    	},
        onFeedPopulationHandler: function(invocations) {
        	var tweets_html = $('.jta-tweet-flexslider .flex-viewport .jta-tweet-list').html();
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
				slideshow:false,
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
    */
	$(document).on('click', '.jta-tweet-list-autorefresh-trigger', function(e) {
		$(this).remove();
	})

    // Instagram
    var limit = 14;
    $.ajax({
        //url: 'http://121212-feed.hdmade.com/results.json',
        url: 'http://50.57.202.190:8080/social/instagram.json',
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
                //url: 'http://121212-feed.hdmade.com/results.json',
                url: 'http://50.57.202.190:8080/social/instagram.json',
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
    });

    // Flash Message Close
    $('a.close').click(function (event) {
		$('.flash').toggleClass('closed');
		if($('.flash').hasClass('closed')) {
			$('.flash .close').html('Expand');
			$('.flash p').slideUp();
		} else {
			$('.flash .close').html('<span>x</span>');
			$('.flash p').slideDown();
		}
    	event.preventDefault();
    });

    $.ajax({
        //url: 'http://121212-feed.hdmade.com/results.json',
        url: 'http://50.57.202.190:8080/social/instagram.json',
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
            //url: 'http://121212-feed.hdmade.com/results.json',
            url: 'http://50.57.202.190:8080/social/instagram.json',
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
    }, 60000);
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
