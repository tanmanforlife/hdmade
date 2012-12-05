
$(document).ready(function () {
    $('.sponsor-banner').simplemarquee({
        speed: 5000,
        direction: 'rtl',
        pause: true
    });
    $('.timer').countdown("2012/12/12 19:00:00", function (event) {
        var $this = $(this);
        switch (event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span#' + event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    });

    $('.videos').roundabout({
        minOpacity: 1,
        minScale: 0.8,
        enableDrag: true
    });

    $(".round-next").click(function () {
        $(".videos").roundabout("animateToNextChild");
        return false;
    });

    $(".round-prev").click(function () {
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
});


$(window).load(function () {
    jQuery('.featured-img li').fitVids();

    jQuery(".featured-img").flexslider({
        animation: "slide",
        animationLoop: false,
        smoothHeight: true,
        useCSS: false,
        controlNav: true,
        directionNav: false,
        slideshow: true,
        touch: false,
        before: function (slider) {
            if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) $f(slider.slides.eq(slider.currentSlide).find('iframe').attr('id')).api('pause');
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
        move: 1,
        controlNav: false,
        slideshow: false,
        initDelay: 400,
        useCSS: false,
        touch: false
    });








    $(".overlay").fancybox({
        type: 'iframe'
    });

    $(".fancybox").fancybox({
        type: 'image'
    });
    $(".lightbox-text").fancybox({});

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

    $('.artists-tweets').jTweetsAnywhere({
        username: '121212concert',
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
                interval: 600
            },
            paging: {
                mode: 'more'
            }
        },
        onReadyHandler: function () {
            $('.artists-tweets').flexslider({
                animation: "slide",
                selector: ".jta-tweet-list > li",
                itemWidth: 333,
                move: 1
            });
        },
        onFeedPopulationHandler: function (invocations) {
            //Fired when new tweets are added


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
    var limit = 14;
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
    });

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