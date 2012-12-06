<?php include 'header.php'; ?>
	<?php /*
	<div class="top">
		<div class="main" role="main"> */ ?>
			<div class="outer-wrapper cf">
				<section class="g span-2">
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
			<div class="ways-to-donate cf">
				<h2>Ways To Donate</h2>
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
					<h2>#121212Concert on Instagram<a href="#" class="more">See All</a></h2>
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
				</div> <!-- .td -->
			</div> <!-- .social -->
		</div> <!-- .main -->
	</div> <!-- .top -->
	<div class="what-artists">
		<div class="wrapper cf">
			<h2>#121212Concert on Twitter</h2>
			<div class="tweets-holding-space"></div>
			<div class="arti">
				<div class="artists-tweets">

				</div> <!-- .artists-tweets -->

			</div> <!-- .arti -->
															<a class="see-all">See All</a>

		</div> <!-- .wrapper -->
	</div> <!-- .what-artists -->
	<div class="celebs-sandy">
		<?php function getVimeoThumb($id) {
			$data = file_get_contents("http://vimeo.com/api/v2/video/$id.json");
			$data = json_decode($data);
			return $data[0]->thumbnail_large;
		} ?>
		<h2>Celebs on Sandy</h2>
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
				<h3>Sandy Relief Fund</h3>
			</hgroup>
			<img src="img/robin-hood.png" alt="" class="left">
			<div class="right">
				<p>Robin Hood has launched a large-scale relief effort to aid our neighbors in the tri-state area whose lives have been shattered by Hurricane Sandy. Within hours of the storm, Robin Hood-funded non-profits were providing blankets, hot food, heaters, generators and more to residents in Red Hook, Coney Island, the Rockaways and all across the region. Now, one month out from the storm, thanks to our supporters, Robin Hood has been able to provide over $8 million in grants to more than 90 different groups.</p>
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
			<?php /* ?>
			<img src="img/sponsors.jpg" alt="sponsor logos" />
			*/ ?>
		</div> <!-- .wrapper -->
	</div>
<?php include 'footer.php'; ?>
