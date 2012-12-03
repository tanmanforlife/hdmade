<?php include 'header.php'; ?>
	<?php /* 
	<div class="top">
		<div role="main"> */ ?>
			<div class="outer-wrapper cf">
				<section class="g span-2 featured-img">
					<ul class="slides">
						<?php
							$args = array( 'post_type' => 'carouselcontent');
							$loop = new WP_Query( $args );
						?>
						<?php if ($loop->have_posts()) : ?>
							<?php while ($loop->have_posts()) : $loop->the_post(); ?>
								<?php if (has_post_thumbnail( $post->ID )) : ?>
									<?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
									<li><img src="<?php echo $image[0]; ?>" alt="" /></li>
								<?php endif;

								if ( get_post_meta($post->ID, 'video_video_link', true) ) :
									$video_url = get_post_meta($post->ID, 'video_video_link', true);
									$segments = explode('/', $video_url);
									echo "<li><iframe id='player_" . $segments[3] . "' src='http://player.vimeo.com/video/" . $segments[3] . "?api=1&color=007ac1&player_id=player_" . $segments[3] . "' webkitAllowFullScreen mozallowfullscreen allowFullScreen frameborder='0' width='655' height='365'></iframe></li>";
								endif; ?>
							<?php endwhile; ?>
						<?php endif; ?>
					</ul> <!-- .slides -->
				</section> <!-- .g.span-2.featured-img -->
				<section class="g span-1 last twitter">
					<h2>@robinhoodnyc <a href="#" class="more">See All</a></h2>
					<?php /* ?>
					<ul class="slides tweets">
						<?php include 'inc/twitter-feed.php'; ?>
					</ul>
					<?php */ ?>
				</section> <!-- .g.span-1.last.twitter -->
			</div> <!-- .outer-wrapper -->
			<div class="ways-to-donate">
				<h2>Ways To Donate</h2>
				<div class="table">
					<div class="tr">
						<div class="td text-to-give">
							<img src="<?php bloginfo('template_url');?>/img/ways-to-donate-text.png" alt="Donate via Text" />
							<p>Text <strong>GIVE</strong> to 50555 to donate $10</p>
						</div> <!-- .text-to-give -->
						<div class="td amazon-to-give">
							<img src="<?php bloginfo('template_url');?>/img/ways-to-donate-amazon.png" alt="Donate via Amazon" />
							<p>Donate using your Amazon account</p>
						</div> <!-- .amazon -->
						<div class="td tweet-to-give">
							<img src="<?php bloginfo('template_url');?>/img/ways-to-donate-twitter.png" alt="Donate via Tweitter" />
							<p>Tweet <strong>#givey #121212concert</strong> to donate</p>
						</div> <!-- .tweet-to-give -->
						<div class="td foursquare-to-give">
							<img src="<?php bloginfo('template_url');?>/img/ways-to-donate-fsq.png" alt="Donate via Foursquare" />
							<p>Check in on foursquare and include <strong>#121212concert</strong> and Samsung will donate $2</p>
						</div> <!-- .foursquare-to-give -->
					</div> <!-- .tr -->
				</div> <!-- .table -->
			</div> <!-- .ways-to-donate -->
			<div class="dynamic cf">
				<div class="g span-2 instagram-feed">
					<h2>From The Garden <a href="#" class="more">See All</a></h2>
					<div class="instagram-grid clearfix">
						<?php for ($i=1; $i <= 9; $i++) { ?>
							<div class="ig ig-<?=$i?>">
								<img src="<?php bloginfo('template_url'); ?>/img/instagram.jpg" alt="" />
							</div>
						<?php } ?>
					</div> <!-- .instagram-grid -->
				</div> <!-- .instagram-feed -->
				<div class="g span-1 last">
					<div class="tumblr-feed">
						<h2>Lorem Ipsum <a href="#" class="more">See All</a></h2>
						<div class="stories">
							<ul class="slides cf">
								<?php include ('inc/tumblr-feed.php'); ?>
							</ul> <!-- .slides -->
						</div> <!-- .stories -->
					</div> <!-- .tumblr-feed -->
					<div class="ticker">
						<?php if ( get_option('show_timer') != '' ) { ?>
							<h2><?php echo get_option('ticket_text'); ?></h2>
							<div class="timer cf">
								<div class="digits">
									<span class="unit" id="daysLeft"></span>
									<span class="unit" id="hours"></span>
									<span class="unit last-unit" id="minutes"></span>
								</div>
								<span class="timer-unit">Days</span>
								<span class="timer-unit">Hours</span>
								<span class="timer-unit">Minutes</span>
							</div>
						<? } else { ?>
							<h2><?php echo get_option('ticket_text'); ?></h2>
							<a href="http://www.ticketmaster.com/121212-The-Concert-For-Sandy-Relief-tickets/artist/1805929?tm_link=artist_artistvenue_module"><img src="<?php bloginfo('template_url'); ?>/img/ticketmaster.jpg" alt="ticketmaster logo" /></a>
						<? } ?>
					</div> <!-- .ticker -->
				</div> <!-- .g.span-1 -->
			</div> <!-- .dynamic -->
			<div class="social">
				<h2>Social</h2>
				<div class="table">
					<div class="tr">
						<div class="td">
							<a href="#" class="icon-facebook">
								<span>Facebook</span>
							</a>
						</div> <!-- .td -->
						<div class="td">
							<a href="#" class="icon-twitter">
								<span>Twitter</span>
							</a>
						</div> <!-- .td -->
						<div class="td">
							<a href="#" class="icon-foursquare">
								<span>Foursquare</span>
							</a>
						</div> <!-- .td -->
						<div class="td">
							<a href="#" class="get-glue">
								<span>GetGlue</span>
							</a>
						</div> <!-- .td -->
					</div> <!-- .tr -->
				</div> <!-- .table -->
			</div> <!-- .social -->
		</div> <!-- .main -->
	</div> <!-- .top -->
	<div class="what-artists">
		<div class="wrapper">
			<h2>What The Artists Are Saying</h2>
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
			<img src="<?php bloginfo('template_url'); ?>/img/121212-merchandise.png" alt="Items for sale on the 121212 Concert store" />
			<p>Merchandise proceeds go to the Robin Hood Relief Fund</p>
		</a>
	</div> <!-- .sandy-store -->
	<div class="robin-hood-stories cf">
		<div class="wrapper">
			<hgroup>
				<h2>Robin <span class="icon-robin"></span> Hood</h2>
				<h3>Sandy Relief Fund</h3>
			</hgroup>
			<img src="<?php bloginfo('template_url') ?>/img/robin-hood.png" alt="" class="left">
			<div class="right">
				<p>Robin Hood has launched a large-scale relief effort to aid our neighbors in the tri-state area whose lives have been shattered by Hurricane Sandy. Within hours of the storm, Robin Hood-funded non-profits were providing blankets, hot food, heaters, generators and more to residents in Red Hook, Coney Island, the Rockaways and all across the region. Now, one month out from the storm, thanks to our supporters, Robin Hood has been able to provide over $8 million in grants tomore than 90 different groups.</p>
			</div> <!-- .right -->
		</div> <!-- .wrapper -->
	</div> <!-- .robin-hood-stories -->
	<div class="sponsors">
		<div class="wrapper">
			<h3>Brought To You By</h3>
			<ul>
				<li data-sponsor="Optimum"><a href="#" class="hide-text">Optimum Lightpath</a></li>
				<li data-sponsor="Samsung"><a href="#" class="hide-text">Samsung Galaxy</a></li>
				<li data-sponsor="StateFarm"><a href="#" class="hide-text">StateFarm</a></li>
				<li data-sponsor="TWC"><a href="#" class="hide-text">Time Warner Cable</a></li>
				<li data-sponsor="Verizon"><a href="#" class="hide-text">Verizon Foundation</a></li>
				<li data-sponsor="Clear Channel"><a href="#" class="hide-text">Clear Channel</a></li>
				<li data-sponsor="iHeart Radio"><a href="#" class="hide-text">iHeart Radio</a></li>
				<li data-sponsor="MSG"><a href="#" class="hide-text">The Madison Square Garden Company</a></li>
				<li data-sponsor="Robin Hood"><a href="#" class="hide-text">Robin Hood</a></li>
				<li data-sponsor="The Weinstein Company"><a href="#" class="hide-text">The Weinstein Company</a></li>
			</ul>
		</div> <!-- .wrapper -->
	</div>
<?php include 'footer.php'; ?>
