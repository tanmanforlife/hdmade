<?php include 'header.php'; ?>
<div role="main">
	<div class="outer-wrapper cf">
		<div class="g one-third aside">

			<?php
				if ( get_option('show_timer') != '' ) {
			?>

				<section class="tickets">
				<h1><?php echo get_option('ticket_text'); ?></h1>

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
			</section>


			<? } else { ?>

				<section class="tickets">

					<p>Image goes here</p>

				</section>


			<? } ?>


			<section class="twitter">
				<h2>On Twitter</h2>
				<ul class="slides tweets">
				<?php include 'inc/twitter-feed.php'; ?>
			</ul>
			</section>
		</div>

		<section class="g two-thirds featured-img">
			<ul class="slides">
				<?
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

        						echo "<li><iframe id='player_" . $segments[3] . "' src='http://player.vimeo.com/video/" . $segments[3] . "?api=1&player_id=player_" . $segments[3] . "' webkitAllowFullScreen mozallowfullscreen allowFullScreen frameborder='0' height='847' width='672'></iframe></li>";

						 endif; ?>


               	<?php endwhile; ?>

     			<?php endif; ?>


			</ul>
		</section>
	</div>

		<div class="artist-list cf">
		<div class="wrapper">
			<ul class="artists">
				<li>Bon Jovi</li>
				<li>Dave Grohl</li>
				<li>Alicia Keys</li>
				<li>Paul McCartney</li>
				<li>Bruce Springsteen &amp; The E Street Band</li>
				<li>Eddie Vedder</li>
				<li>Roger Waters</li>
				<li>Kanye West</li>
				<li>The Who</li>
			</ul>

			<h2>Where to Watch</h2>

			<ul class="where-watch cf">
				<li><abbr>TV<abbr></li>
				<li>Web</li>
				<li>Social</li>
			</ul>

		</div>
	</div>




	<div class="stats cf">
		<div class="wrapper cf">
			<section class="g one-third stat-item">
				<span class="icon-storm"><span>Storm</span></span>
				<p><span class="giga">$50 Billion</span>in damage in the Tri-State area, making it the country's costliest storm other than Hurricane Katrina</p>
			</section>

			<section class="g one-third stat-item">
				<span class="icon-debt"><span>debt</span></span>
				<p><span class="giga">59,000</span>disaster-relief loan applications have been issued to affected businesses in New Jersey, New York and Connecticut</p>
			</section>

			<section class="g one-third stat-item">
				<span class="icon-key"><span>key</span></span>
				<p><span class="giga">2,500</span>hotel and motel rooms in New York and New Jersey are filled with displaced Sandy victims</p>
			</section>
		</div>
	</div>







	<div class="robin-hood-stories cf">
		<ul class="cf slides">
			<li>
				<div class="wrapper pad cf">
					<span class="icon-robin"></span>
					<h2>Robin Hood on Sandy longer longer longer</h2>

					<div class="g one-half">
						<img src="<?php bloginfo('template_url') ?>/img/robin-hood.png" alt="" class="left">
					</div>

					<div class="g one-half robin-content">
						<p>As the tri-state region begins to recover from Sandy's devastation along the coastal areas of Long Island, Queens, Staten Island, Connecticut and New Jersey, there remains the enormous task of rebuilding the infrastructure and thousands of shattered lives. This special live music event will provide assistance to millions of people throughout the area who are confronting staggering short- and long-term obstacles.</p>
						<p>The proceeds from the concert will go to the Robin Hood Relief Fund which is providing money, material and know-how to local organizations that are serving families and individuals in the regions hardest hit by the storm.</p>
					</div>
				</div>
			</li>

			<li>
				<div class="wrapper pad cf">
					<span class="icon-robin"></span>
					<h2>Robin Hood on Sandy</h2>

					<div class="g one-half">
						<img src="<?php bloginfo('template_url') ?>/img/robin-hood.png" alt="" class="left">
					</div>

					<div class="g one-half robin-content">
						<p>As the tri-state region begins to recover from Sandy's devastation along the coastal areas of Long Island, Queens, Staten Island, Connecticut and New Jersey, there remains the enormous task of rebuilding the infrastructure and thousands of shattered lives. This special live music event will provide assistance to millions of people throughout the area who are confronting staggering short- and long-term obstacles.</p>
						<p>The proceeds from the concert will go to the Robin Hood Relief Fund which is providing money, material and know-how to local organizations that are serving families and individuals in the regions hardest hit by the storm.</p>
					</div>
				</div>
			</li>



		</ul>
	</div>



	<div class="tumblr-feed">
		<h2>Our stories on tumblr</h2>
		<div class="wrapper cf">
			<div class="stories">
				<ul class="slides cf">
					<?php include ('inc/tumblr-feed.php'); ?>
				</ul>
			</div>
		</div>
	</div>


	<div class="radio cf">
		<div class="wrapper">
			<h2>Listen to All the Artists on 12.12.12 Radio</h2>
			<a class="btn play">Play Now</a>
		</div>
	</div>

	<div class="support cf">
		<div class="wrapper cf">
			<section class="g one-third cf">
				<div class="circle">
					<h3 class="meta">Stay<br>Updated</h3>
	                <a href="#" class="icon-facebook"><span>Facebook</span></a>
				</div>
			</section>

			<section class="g one-third">
				<div class="circle middle">
					<h3 class="meta">Spread the<br>Word</h3>
					<a href="">#1212Concert</a>
				</div>
			</section>

			<section class="g one-third">
				<div class="circle last">
					<h3 class="meta">Donate to the Robin Hood Relief Fund</h3>
					<a href="" class="btn donate"><span class="icon-robin"></span>Donate</a>
				</div>
			</section>

			<section class="g one-whole supported cf">
				<h2>Supported By</h2>
				<ul class="support-list cf">
					<li class="clearchannel"><a href="">Clear Channel</a></li>
					<li class="iheart"><a href="">iHeart Radio</a></li>
					<li class="madison"><a href="">Madison Square Garden</a></li>
					<li class="robin"><a href="">Robin Hood</a></li>
					<li class="weinstein"><a href="">The Weinstein Company</a></li>
				</ul>
			</section>
		</div>
	</div>

<?php include 'footer.php'; ?>
