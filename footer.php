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

	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-36743201-1']);
	  _gaq.push(['_setDomainName', '121212concert.org']);
	  _gaq.push(['_setAllowLinker', true]);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>

	<script type="text/javascript">
	  var _sf_async_config = { uid: 28292, domain: '121212concert.org' };
	  (function() {
	    function loadChartbeat() {
	      window._sf_endpt = (new Date()).getTime();
	      var e = document.createElement('script');
	      e.setAttribute('language', 'javascript');
	      e.setAttribute('type', 'text/javascript');
	      e.setAttribute('src',
	        (("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") +
	        "js/chartbeat.js");
	      document.body.appendChild(e);
	    };
	    var oldonload = window.onload;
	    window.onload = (typeof window.onload != 'function') ?
	      loadChartbeat : function() { oldonload(); loadChartbeat(); };
	  })();
	</script> <!-- end Chartbeat -->

</body>
</html>
<?php
$incls = get_included_files();
$incls = array_filter($incls, "is_file");
$mod_times = array_map('filemtime', $incls);
$mod_time = max($mod_times);

$gmt_date = gmstrftime("%a, %d %b %Y %T GMT", $mod_time);

header("Last-Modified: $gmt_date");

