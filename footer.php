	<footer class="cf" role="contentinfo">
		<div class="wrapper cf">
			<nav class="one-half cf">
				<ul class="nav footer">
					<li><a href="#privacy" class="lightbox-text">Robin Hood</a></li>
					<li><a href="" class="lightbox-text">Privacy Policy</a></li>
					<li><a href="" class="lightbox-text">Terms of Use</a></li>
				</ul>
			</nav>
			<small class="one-half">&copy; 2002-2012 Robin Hood Foundation</small>
		</div>
	</footer>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/plugins.js"></script>
	<script type="text/javascript" src="js/main.js"></script>

</body>
</html>
<?php
$incls = get_included_files();
var_dump($incls);
$incls = array_filter($incls, "is_file");
$mod_times = array_map('filemtime', $incls);
$mod_time = max($mod_times);

$gmt_date = gmstrftime("%a, %d %b %Y %T GMT", $mod_time);

header("Last-Modified: $gmt_date");

