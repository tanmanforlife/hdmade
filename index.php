<?php include 'header.php'; ?>
<?php /*
<div class="top">
	<div class="main" role="main"> */ ?>
		<div class="outer-wrapper cf">
			<section class="g span-2 featured-img">
				<ul class="slides">
					<li><img src="carousel-images/carousel_1.jpg" alt="" /></li>
					<li><img src="carousel-images/carousel_1.jpg" alt="" /></li>
				</ul> <!-- .slides -->
			</section> <!-- .g.span-2.featured-img -->
			<div class="nav-mobile" aria-hidden="true">
				<ul class="nav">
					<li><a href="#">#121212 Concert</a></li>
					<li><a href="broadcast.php" target="_blank">Watch on TV</a></li>
					<li><a href="social.php" target="_blank">Social</a></li>
					<li><a href="#" target="_blank">Shop</a></li>
				</ul>
			</div>
			<div class="twitter-wrap cf">
				<section class="g span-1 last twitter" id="js-robin-hood-tweets">
					<h2>@robinhoodnyc <a href="https://twitter.com/RobinHoodNYC" class="more" target="_blank">See All</a></h2>
				</section> <!-- .g.span-1.last.twitter -->
			</div>
		</div> <!-- .outer-wrapper -->
		<div class="mobile-wrap cf">
			<div class="ways-to-donate cf">
				<h2>Ways To Give</h2>
				<div class="one-half to-give">
					<a class="donate-btn btn-amazon">Amazon</a>
					<p>Donate using your Amazon Account</p>
				</div> <!-- .text-to-give -->
				<div class="one-half to-give">
					<a class="donate-btn btn-twitter">Twitter</a>
					<p>Tweet #givey #121212concert to donate</p>
				</div> <!-- .amazon -->
			</div> <!-- .ways-to-donate -->
			<div class="dynamic cf">
				<div class="g span-2 instagram-feed">
					<h2>Instagram #121212Concert<a href="instagram.php" class="more" target="_blank">See All</a></h2>
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
						<h2>Tumblr <a href="http://robinhoodnyc.tumblr.com/search/121212concert" class="more" target="_blank">See All</a></h2>
						<div class="stories">
							<ul class="slides cf">
								<?php include ('inc/tumblr-feed.php'); ?>
							</ul> <!-- .slides -->
						</div> <!-- .stories -->
					</div> <!-- .tumblr-feed -->
					<div class="ticker">
						<p class="timer-status">Less than 3 days to go!!</p>
						<div class="timer cf">
							<div class="digits">
								<span class="unit" id="daysLeft"></span>
								<span class="unit" id="hours"></span>
								<span class="unit last-unit" id="minutes"></span>
							</div>
							<div class=units>
								<span class="timer-unit">Days</span>
								<span class="timer-unit">Hours</span>
								<span class="timer-unit">Minutes</span>
							</div>
						</div>
					</div> <!-- .ticker -->
				</div> <!-- .g.span-1 -->
			</div> <!-- .dynamic -->
			<div class="social cf">
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
				</div> <!-- .td -->
			</div> <!-- .social -->
		</div> <!-- .mobile-wrap -->
	</div> <!-- .main -->
</div> <!-- .top -->
<div class="what-artists">
	<div class="wrapper cf">
		<h2>Twitter #121212concert</h2>
		<div class="tweets-holding-space"></div>
		<div class="arti">
			<div class="artists-tweets">

			</div> <!-- .artists-tweets -->

		</div> <!-- .arti -->
		<a href="https://twitter.com/search?q=%23121212concert" class="see-all" target="_blank">See All</a>
	</div> <!-- .wrapper -->
</div> <!-- .what-artists -->
<div class="celebs-sandy">
	<h2>Why We Are Doing This</h2>
	<?php
		/** 
		 * When inputting actual Vimeo videos here, please make sure they have a width of 571 and a height of 320.
		 */
	?>
	<div class="celeb-videos">
		<ul class="slides cf">
			<li class="celeb-video">
				<div class="celeb-video-wrap">
					<div class="celeb-video-frame">
						<iframe src="http://player.vimeo.com/video/54423646?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					</div>
				</div>
				<p>Alicia Keys talks about the impact of Sandy.</p>
			</li>
			<li class="celeb-video">
				<div class="celeb-video-wrap">
					<div class="celeb-video-frame">
						<iframe src="http://player.vimeo.com/video/53745876?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					</div>
				</div>
				<p>Alicia Keys talks about the impact of Sandy.</p>
			</li>
			<li class="celeb-video">
				<div class="celeb-video-wrap">
					<div class="celeb-video-frame">
						<iframe src="http://player.vimeo.com/video/54658957?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					</div>
				</div>
				<p>Alicia Keys talks about the impact of Sandy.</p>
			</li>
			<li class="celeb-video">
				<div class="celeb-video-wrap">
					<div class="celeb-video-frame">
						<iframe src="http://player.vimeo.com/video/54626679?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					</div>
				</div>
				<p>Alicia Keys talks about the impact of Sandy.</p>
			</li>
		</ul>
	</div> <!-- .celeb-videos -->
</div> <!-- .celebs-sandy -->
<div class="sandy-store cf">
	<div class="wrapper">
		<h2>Support the Cause</h2>
		<div class="one-third">
			<img src="img/hoodies.png" alt="Merchandise Hoodes" />
			<p><em>Merchandise proceeds go to the Robin Hood Relief Fund</em></p>
			<a class="#" href="#">Buy</a>
		</div>

		<div class="one-third">
			<a href="http://www.iheart.com/live/6146/?autoplay=true"><img src="img/1212merch.png" alt="Listen to the Artists" /></a>
			<p><em>Listen to all the artists on<br>121212 Radio</em></p>
			<a class="http://www.iheart.com/live/6146/?autoplay=true" href="#">Listen</a>
		</div>

		<div class="one-third">
			<img />
			<p><em>Check out the<br>121212 Soundtrack on iTunes</em></p>
			<a class="#" href="#">Listen</a>
		</div>
	</div>
</div> <!-- .sandy-store -->
<div class="robin-hood-stories cf">
	<div class="wrapper">
		<hgroup>
			<h2>Robin <span class="icon-robin"></span> Hood</h2>
		</hgroup>
		<img src="img/robin-hood-cleanup.jpg" alt="" class="left">
		<div class="right">
			<h3>The Robin Hood Relief Fund</h3>
			<p>Robin Hood has launched a large-scale relief effort to aid our neighbors in the tri-state area whose lives have been shattered by Hurricane Sandy. Within hours of the storm, Robin Hood-funded non-profits were providing blankets, hot food, heaters, generators and more to residents in Red Hook, Coney Island, the Rockaways and all across the region. Now, one month out from the storm, thanks to our supporters, Robin Hood has been able to provide over $8 million in grants to more than 90 different groups.</p>
			<p>Thanks to the generosity of concert ogranizers, sponsors, and Robin Hood's board of directors, every single penny from ticket purchases and donations will go to the best community organizations serving the victims of Hurricane Sandy through the Robin Hood Relief Fund.</p>
		</div> <!-- .right -->
	</div> <!-- .wrapper -->
</div> <!-- .robin-hood-stories -->
<div class="sponsors cf">
	<div class="wrapper">
		<h3>Brought To You By</h3>
		<ul class="sponsor-list">
			<li data-sponsor="ClearChannel"><a href="#">ClearChannel</a></li>
			<li data-sponsor="iHeartRadio"><a href="#">iHeartRadio</a></li>
			<li data-sponsor="MSG"><a href="#">The Madison Square Garden Company</a></li>
			<li data-sponsor="Robin Hood"><a href="#">Robin Hood</a></li>
			<li data-sponsor="The Weinstein Company"><a href="#">The Weinstein Company</a></li>
		</ul>
	</div> <!-- .wrapper -->
</div> <!-- .sponsors -->
<?php include 'footer.php'; ?>
