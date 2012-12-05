<?php include 'header.php'; ?>
	<?php /*
	<div class="top">
		<div role="main"> */ ?>
			<div class="outer-wrapper cf">
				<section class="g span-2 featured-img">
					<object type="application/x-shockwave-flash" id="twelvePlayer" name="twelvePlayer" data="http://static.iheart.com/121212/amp.clearchannel/ClearChannelPlayer.swf">
						<param name="allowFullScreen" value="true">
						<param name="allowScriptAccess" value="always"><param name="wmode" value="direct">
						<param name="bgColor" value="#000000">
						<param name="flashvars" value="settings_url=http://static.iheart.com/121212/amp.clearchannel/player.flash.xml&amp;auto_play=false&amp;data_feed_url=http://static.iheart.com/121212/amp.clearchannel/feed.json&amp;ticker_text_url=http://static.iheart.com/121212/resources/ticker.txt&amp;ticker_polling_interval=3000&amp;ticker_speed=2&amp;report_playerId=iHeartRadioAkamaiEventPlayer&amp;report_device=undefined"><
					</object>
				</section> <!-- .g.span-2.featured-img -->
				<section class="g span-1 last twitter" id="js-robin-hood-tweets">
					<h2>@robinhoodnyc <a href="#" class="more">See All</a></h2>
				</section> <!-- .g.span-1.last.twitter -->
			</div> <!-- .outer-wrapper -->
			<div class="ways-to-donate">
				<h2>Ways To Donate</h2>
				<div class="table">
					<div class="tr">
						<div class="td text-to-give">
							<img src="img/ways-to-donate-text.png" alt="Donate via Text" />
							<p>Text <strong>GIVE</strong> to 50555 to donate $10</p>
						</div> <!-- .text-to-give -->
						<div class="td amazon-to-give">
							<img src="img/ways-to-donate-amazon.png" alt="Donate via Amazon" />
							<p>Donate using your Amazon account</p>
						</div> <!-- .amazon -->
						<div class="td tweet-to-give">
							<img src="img/ways-to-donate-twitter.png" alt="Donate via Tweitter" />
							<p>Tweet <strong>#givey #121212concert</strong> to donate</p>
						</div> <!-- .tweet-to-give -->
						<div class="td foursquare-to-give">
							<img src="img/ways-to-donate-fsq.png" alt="Donate via Foursquare" />
							<p>Check in on foursquare and include <strong>#121212concert</strong> and Samsung will donate $2</p>
						</div> <!-- .foursquare-to-give -->
					</div> <!-- .tr -->
				</div> <!-- .table -->
			</div> <!-- .ways-to-donate -->
			<div class="dynamic cf">
				<div class="g span-2 instagram-feed">
					<h2>From The Garden <a href="#" class="more">See All</a></h2>
					<div class="instagram-grid clearfix">
						<ul id="js-instagram" class="instagram">
						<?php for ($i=1; $i <= 9; $i++) { ?>
							<li class="ig ig-<?=$i?>">
								<a href="" class="insta-link"><img class="photo" src="" alt="" /></a>
							</li>
						<?php } ?>
						</ul>
					</div> <!-- .instagram-grid -->
				</div> <!-- .instagram-feed -->
				<div class="g span-1 last">
					<div class="tumblr-feed">
						<h2>Tumblr <a href="#" class="more">See All</a></h2>
						<div class="stories">
							<ul class="slides cf">
								<?php include ('inc/tumblr-feed.php'); ?>
							</ul> <!-- .slides -->
						</div> <!-- .stories -->
					</div> <!-- .tumblr-feed -->
					<div class="foursquare">
						<p><span class="giga">43,926</span>have checked in at #121212concert</p>
						<p class="samsung"><em>Samsung will donate $2 for every check in.</em></p>
					</div>

				</div> <!-- .g.span-1 -->
			</div> <!-- .dynamic -->
			<div class="social cf">
				<h2>Social</h2>
						<div class="one-fourth">
							<a href="#">
								<img src="img/fb.png" />
							</a>
						</div> <!-- .td -->
						<div class="one-fourth">
							<a href="#">
								<img src="img/twitter.png" />
							</a>
						</div> <!-- .td -->
						<div class="one-fourth">
							<a href="#">
								<img src="img/foursquare.png" />
							</a>
						</div> <!-- .td -->
						<div class="one-fourth">
							<a href="#">
								<img src="img/glue.png" />
							</a>
			</div> <!-- .social -->
		</div> <!-- .main -->
	</div> <!-- .top -->
	<div class="what-artists">
		<div class="wrapper cf">
			<h2>What The Artists Are Saying</h2>
			<div class="arti">
			<div class="artists-tweets">

			</div>
		</div>
		</div> <!-- .wrapper -->
	</div> <!-- .what-artists -->
	<div class="celebs-sandy">
		<h2>Celebs on Sandy</h2>
		<div class="celeb-videos">
			<ul class="slides">
				<li class="celeb-video">
					<iframe src="http://player.vimeo.com/video/54423646?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					<p>Alicia Keys talks about the impact of Sandy.</p>
				</li>
				<li class="celeb-video">
					<iframe src="http://player.vimeo.com/video/54423646?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					<p>Alicia Keys talks about the impact of Sandy.</p>
				</li>
				<li class="celeb-video">
					<iframe src="http://player.vimeo.com/video/54423646?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					<p>Alicia Keys talks about the impact of Sandy.</p>
				</li>
				<li class="celeb-video">
					<iframe src="http://player.vimeo.com/video/54423646?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					<p>Alicia Keys talks about the impact of Sandy.</p>
				</li>
			</ul>
		</div> <!-- .celeb-videos -->
	</div> <!-- .celebs-sandy -->
	<div class="sandy-store">
		<h2>Tell Them You Were There!</h2>
		<a href="#">
			<img src="img/merch.jpg" alt="Items for sale on the 121212 Concert store" />
			<p>Merchandise proceeds go to the Robin Hood Relief Fund</p>
		</a>
	</div> <!-- .sandy-store -->
	<div class="robin-hood-stories cf">
		<div class="wrapper">
			<hgroup>
				<h2>Robin <span class="icon-robin"></span> Hood</h2>
				<h3>Sandy Relief Fund</h3>
			</hgroup>
			<img src="img/robin-hood.png" alt="" class="left">
			<div class="right">
				<p>Robin Hood has launched a large-scale relief effort to aid our neighbors in the tri-state area whose lives have been shattered by Hurricane Sandy. Within hours of the storm, Robin Hood-funded non-profits were providing blankets, hot food, heaters, generators and more to residents in Red Hook, Coney Island, the Rockaways and all across the region. Now, one month out from the storm, thanks to our supporters, Robin Hood has been able to provide over $8 million in grants tomore than 90 different groups.</p>
			</div> <!-- .right -->
		</div> <!-- .wrapper -->
	</div> <!-- .robin-hood-stories -->
	<div class="sponsors cf">
		<div class="wrapper">
			<h3>Brought To You By</h3>
			<img src="img/sponsors.jpg" alt="sponsor logos" />
		</div> <!-- .wrapper -->
	</div>
<?php include 'footer.php'; ?>
