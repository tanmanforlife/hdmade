<?php $body_class = 'home'; ?>
<?php include 'header.php'; ?>
<?php /*
<div class="top">
	<div class="main" role="main"> */ ?>	
		<div class="outer-wrapper cf">
			<section class="g span-2 featured-img">
								
				<ul class="slides">
					<li><img src="carousel-images/message1_8.jpg" alt="" /></li>
					<li><a href="broadcast.php" target="_blank"><img src="carousel-images/streamhere.png" alt="" /></a></li>
					<li><a href="http://www.robinhood.org/rhsandy" target="_blank"><img src="carousel-images/rebuild.png" alt="" /></a></li>
					<?php /* <li><iframe src="http://static.iheart.com/121212/player.html?partner=robinhood" width="100%" height="371px" scrolling="no" frameborder="0"></iframe></li> */ ?>
					<?php /*
						// Use this exact HTML to embed any vimeo video in this section, only switch out the video ID.
					<li>
						<iframe src="http://player.vimeo.com/video/55138860?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=0079c1&amp;api=1&amp;player_id=featuredvideo1" width="655" height="371" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen data-vimeo="true" id="featuredvideo1"></iframe>
					</li>
					*/ ?>
				</ul> <!-- .slides -->
		

			</section> <!-- .g.span-2.featured-img -->
			<div class="nav-mobile" aria-hidden="true">
				<ul class="nav">
					<li><span class="separator">#121212 Concert</span></li>
					<li><a href="broadcast.php" target="_blank">Watch</a></li>
					<li><a href="social.php" target="_blank">Social</a></li>
					<li><a href="http://store.121212concert.org/" target="_blank">Shop</a></li>
				</ul>
			</div>
			<div class="ways-to-give g span-1 last cf">
				<h2>Ways to Give</h2>
				<div class="ways-to-give-donate">
					<a class="btn donate donate-modal-link-off" href="https://www.robinhood.org/take-action/SandyRelief.aspx" target="_blank">Donate</a>
					<p>Donate to the Robin Hood Relief Fund</p>
				</div>
				<div class="ways-to-give-text">
					<img src="img/TexttoGiveIcon.png" />
					<p>TEXT TO GIVE, Presented by Chase. Text ROBINHOOD to 50555 to donate $10. <a class="text-to-give-modal-link" href="#text-to-give-popup" title="Terms">Terms</a>.
					</p>
				</div>
				<?php /* ?>
				<section class="g span-1 last twitter" id="js-robin-hood-tweets">
					<h2>@robinhoodnyc <a href="https://twitter.com/RobinHoodNYC" class="more" target="_blank">See All</a></h2>
				</section> <!-- .g.span-1.last.twitter -->
				<?php */ ?>
			</div>
		</div> <!-- .outer-wrapper -->
		<div class="mobile-wrap cf">
			<div class="what-artists">
				<div class="wrapper cf">
					<h2><span><span class="icon-twitter"></span>Twitter #121212concert</span></h2>
					<div class="tweets-holding-space"></div>
					<div class="arti">
						<div class="artists-tweets">

						</div> <!-- .artists-tweets -->

					</div> <!-- .arti -->
					<a href="https://twitter.com/search?q=%23121212concert" class="see-all more" target="_blank">See All</a>
				</div> <!-- .wrapper -->
			</div> <!-- .what-artists -->
			<div class="dynamic cf">
				<div class="g span-2 instagram-feed">
					<h2>Instagram #121212Concert<a href="instagram.php" class="more" target="_blank">See All</a></h2>
					<div class="instagram-grid cf">
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
					<!--<a href="http://www.facebook.com/121212concert" target="_blank">-->
						<img src="img/fb.png" />
					<!--</a>-->
				</div> <!-- .td -->
				<div class="one-fourth">
					<!--<a href="https://twitter.com/121212Concert" target="_blank">-->
						<img src="img/twitter.png" />
					<!--</a>-->
				</div> <!-- .td -->
				<div class="one-fourth">
					<!--<a href="http://foursquare.com" target="_blank">-->
						<img src="img/foursquare.png" />
					<!--</a>-->
				</div> <!-- .td -->
				<div class="one-fourth">
					<!--<a href="http://getglue.com/tv_shows/121212_concert_for_sandy_relief" target="_blank">-->
						<img src="img/glue.png" />
					<!--</a>-->
				</div> <!-- .td -->
			</div> <!-- .social -->
		</div> <!-- .mobile-wrap -->
	</div> <!-- .main -->
</div> <!-- .top -->
<div class="celebs-sandy">
	<h2>Why We Are Doing This</h2>
	<?php
		/** 
		 * When inputting actual Vimeo videos here, please make sure they have a width of 571 and a height of 320.
		 */
	?>
	<div class="celeb-videos flexslider-fade">
		<ul class="slides cf">
			<li class="celeb-video">
				<div class="celeb-video-wrap">
					<div class="celeb-video-frame">
						<iframe src="http://player.vimeo.com/video/55133889?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					</div>
				</div>
				<p>Jon Bon Jovi talks about seeing the destruction Hurricane Sandy wreaked on his hometown and the need for the relief effort.</p>
			</li>
			<li class="celeb-video">
				<div class="celeb-video-wrap">
					<div class="celeb-video-frame">
						<iframe src="http://player.vimeo.com/video/55133887?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					</div>
				</div>
				<p>Billy Joel talks about being in New York during Hurricane Sandy and the need for the relief effort.</p>
			</li>
			<li class="celeb-video">
				<div class="celeb-video-wrap">
					<div class="celeb-video-frame">
						<iframe src="http://player.vimeo.com/video/55133888?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					</div>
				</div>
				<p>Alicia Keys talks about the lingering effects of Hurricane Sandy on New York and the need for the relief effort.</p>
			</li>
			<li class="celeb-video">
				<div class="celeb-video-wrap">
					<div class="celeb-video-frame">
						<iframe src="http://player.vimeo.com/video/55138860?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="571" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
					</div>
				</div>
				<p>Bruce Springsteen talks about the destruction Hurricane Sandy caused to the Jersey Shore and the need to raise money for the relief effort.</p>
			</li>
		</ul>
	</div> <!-- .celeb-videos -->
</div> <!-- .celebs-sandy -->
<div class="sandy-store cf">
	<div class="wrapper cf">
		<h2>Support the Cause</h2>
		<div class="one-third">
			<img src="img/hoodies.png" alt="Merchandise Hoodes" />
			<p><em>Merchandise proceeds go to the Robin Hood Relief Fund</em></p>
			<a class="link" href="http://store.121212concert.org" target="_blank">Buy</a>
		</div>

                <div class="one-third">
			<img src="img/DonatePic.jpg" alt="" />
			<p><em>Donate to the Robin Hood Relief Fund</em></p>
			<a class="link donate-modal-link-off" href="https://www.robinhood.org/take-action/SandyRelief.aspx" target="_blank">Donate</a>
		</div>

		<div class="one-third">
			<a href="http://www.iheart.com/live/6146/?autoplay=true"><img src="img/1212merch.png" alt="Listen to the Artists" /></a>
			<p><em>Listen to all the artists on<br>121212 Radio</em></p>
			<a class="link" href="http://www.iheart.com/live/6146/?autoplay=true" target="_blank">Share</a>
		</div>
		
	</div>
</div> <!-- .sandy-store -->
<div class="robin-hood-stories cf">
	<div class="wrapper cf">
		<hgroup>
			<!--h2>Robin <span class="icon-robin"></span> Hood</h2-->
                        <a href="http://www.robinhood.org/rhsandy" target="_blank"><img src="img/RHlogo.png" /></a>
		</hgroup>
		<a href="http://www.robinhood.org/rhsandy" target="_blank"><img src="img/robin-hood-cleanup.jpg" alt="" class="left"></a>
		<div class="right">
			<a href="http://www.robinhood.org/rhsandy" target="_blank"><h3>The Robin Hood Relief Fund</h3></a>
			<p>Robin Hood has launched a large-scale relief effort to aid our neighbors in the tri-state area whose lives have been shattered by Hurricane Sandy. Within hours of the storm, Robin Hood-funded non-profits were providing blankets, hot food, heaters, generators and more to residents in Red Hook, Coney Island, the Rockaways and all across the region. Now, one month out from the storm, thanks to our supporters, Robin Hood has been able to provide over $8 million in grants to more than 90 different groups.</p>
			<p>Thanks to the generosity of concert ogranizers, sponsors, and Robin Hood's board of directors, every single penny from ticket purchases and donations will go to the best community organizations serving the victims of Hurricane Sandy through the Robin Hood Relief Fund.</p>
		</div> <!-- .right -->
	</div> <!-- .wrapper -->
</div> <!-- .robin-hood-stories -->
<?php include 'footer.php'; ?>
