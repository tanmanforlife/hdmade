<?php
	function limit_words($words, $limit, $append = ' &hellip;') {
		// Add 1 to the specified limit becuase arrays start at 0
		$limit = $limit+1;
		// Store each individual word as an array element
		// Up to the limit
		$words = explode(' ', $words, $limit);
		// Shorten the array by 1 because that final element will be the sum of all the words after the limit
		array_pop($words);
		// Implode the array for output, and append an ellipse
		$words = implode(' ', $words) . $append;
		// Return the result
		return $words;
	}
	$request = 'http://robinhoodnyc.tumblr.com/api/read/json';
	$ci = curl_init($request);
	curl_setopt($ci, CURLOPT_RETURNTRANSFER, TRUE);
	$input = curl_exec($ci);
	$input = str_replace('var tumblr_api_read = ','',$input);
	$input = str_replace(';','',$input);
	$value = json_decode($input, true);
	$content =  $value['posts'];
	foreach ($content as $post) {
		$type = $post['type'];
		if ($post['type'] == 'regular' && in_array('sandyrelief', $post['tags'])) {
			$regularPostBody = $post['regular-body'];
			$regularPostBody = preg_replace("/<img[^>]+\>/i", "", $regularPostBody);
			$regularPostBody = strip_tags($regularPostBody);
			?>
			<li class="regular">
				<div class="item-wrap">
					<div class="content">
						<a href="<?php echo $post['url'] ?>"><img src="<?php bloginfo('template_url') ?>/img/tumblr-placeholder.png" alt="tumblr photo" /></a>
						<p><? echo limit_words($regularPostBody,20); ?></p>
					</div>
				</div>
			</li>
		<?php }
		if ($post['type'] == 'photo' && in_array('sandyrelief', $post['tags'])) {
			$photoUrl = $post['photo-url-400'];
			$photoCaption = $post['photo-caption'];
			$photoCaption = strip_tags($photoCaption);
			?>
			<li class="">
				<div class="item-wrap">
					<div class="content">
						<a href="<?php echo $post['url'] ?>"><img src="<?php echo $photoUrl ?>" alt="tumblr photo" /></a>
						<p><? echo limit_words($photoCaption, 20); ?></p>
					</div>
				</div>
			</li>
		<?php }
	} 
?>