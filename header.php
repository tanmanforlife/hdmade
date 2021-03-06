<?php
// Start output buffering so we can add headers throughout the request.
ob_start();

// Set up a 5 minute TTL that Varnish will respect.
if ($_SERVER['REQUEST_METHOD'] === 'GET' || $_SERVER['REQUEST_METHOD'] === 'HEAD') {
  header("Cache-Control: public, max-age=300");
}

function auto_version($file) {
  // Detect the path to the root, just in case someone is running this on
  // http://localhost/121212concert/, for example.
  $root_path = dirname($_SERVER["SCRIPT_NAME"]);
  if ($root_path !== "/") {
    $root_path .= "/";
  }

  if(strstr($_SERVER['HTTP_HOST'], 'localhost') || strstr($_SERVER['HTTP_HOST'], 'hdmade') || strstr($_SERVER['HTTP_HOST'], 'imarc')) {
      if(strstr($file, 'style')){
          return 'style.css';
      }
  }

  // Get the file modified time and put it into the filename.
  $mtime = filemtime($file);
  return $root_path . preg_replace('{\\.([^./]+)$}', ".$mtime.\$1", $file);
}
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<html>
<head>
    <script type="text/javascript">var _sf_startpt=(new Date()).getTime()</script> <!-- start Chartbeat -->

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>121212 Concert</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!--[if IE]>
      <script type="text/javascript" src="<?php echo auto_version('js/html5.js'); ?>"></script>
    <![endif]-->

    <link rel="stylesheet" href="<?php echo auto_version('style.css'); ?>" type="text/css" />
    <link rel="icon" type="image/png" href="<?php echo auto_version('img/favicon.png'); ?>" />
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
    <script src="<?php echo auto_version('js/modernizr.min.js'); ?>"></script>
	<script src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
    <!--[if (gte IE 6)&(lte IE 8)]>
      <script type="text/javascript" src="<?php echo auto_version('js/selectivizr.min.js') ?>"></script>
    <![endif]-->

</head>
<body<?php if(isset($body_class)) echo ' class="'.$body_class.'"'; ?>>
<!-- This is Steven's newer change for the load test. -->
<div id="donate-popup" style="display: none;">
	<h1>Donate</h1>
	<p>Your donation will serve the victims of Hurricane Sandy through the Robin Hood Relief Fund.  You will be redirected to Amazon to complete the payment process.</p>
	<!--a href="" class="btn donate">Donate</a-->
	<form id="donate-form" action="https://authorize.payments.amazon.com/pba/paypipeline" method="post" target="_blank">

		  <input type="hidden" name="returnUrl" value="http://121212concert.org" >
		  <input type="hidden" name="processImmediate" value="1" >
		  <input type="hidden" name="accessKey" value="11SEM03K88SD016FS1G2" >
		  <input type="hidden" name="signatureMethod" value="HmacSHA256" >
		  <input type="hidden" name="collectShippingAddress" value="1" >
		  <input type="hidden" name="isDonationWidget" value="1" >
		  <input type="hidden" name="amazonPaymentsAccountId" value="WKAEVFSXUGQC4TVUGH8F423RR51BA6P6QSX2GK" >
		  <input type="hidden" name="cobrandingStyle" value="logo" >
		  <input type="hidden" name="immediateReturn" value="1" >
		  <input type="hidden" name="description" value="Donate to Benefit the Robin Hood Relief Fund" >
		  <input type="hidden" name="abandonUrl" value="http://121212concert.org" >
		  <input type="hidden" name="signatureVersion" value="2" >
		  <input type="hidden" name="signature" value="dzp+dJ1q9LpYjGocFWiyNHTGQVA9FIusU+tjvxscEtQ=" >

		<div class="amounts">
			<input type="radio" name="amount" class="amount" value="10" /><label>$10</label>
			<input type="radio" name="amount" class="amount" value="50" /><label>$50</label>
			<input type="radio" name="amount" class="amount" value="100" /><label>$100</label>
			<span class="custom_wrap"><input type="radio" value="custom" class="custom" /> $&nbsp;<input type="text" name="amount" id="amazon_amount" value="" /></span>
		</div>
		<input type="submit" id="submit_donate" class="btn donate" value="Donate" border="0">
		<div class="error"></div>
	</form>
</div>


<div id="text-to-give-popup" style="display: none;">
	<h1>Terms</h1>
	<p>
		$10.00 donation to the Robin Hood Foundation. Charges will appear on your wireless bill, or be deducted from your prepaid balance. All purchases must be
		authorized by account holder. Must be 18 years of age or have parental permission to paticipate. Message and Data Rates may apply.
		Text STOP to 50555 to STOP.
		Text HELP to 50555 for HELP.
	</p>
	<p>
		Full Terms:<br>
		<a href="http://www.mGive.org/T" target="_blank">mGive.org/T</a><br>
		<a href="http://www.mgivefoundation.org/privacy.aspx" target="_blank">Privacy Policy</a>
		</p>

</div>


<!--
<div class="sponsor-banner flexslider-fade">
	<ul class="slides cf">
		<li>
			<img src="img/header-logos/optimum.png" alt="Optimum Lightpath" title="Optimum Lightpath" />
			<img src="img/header-logos/samsung.png" alt="Samsung Galaxy" title="Samsung Galaxy" />
			<img src="img/header-logos/statefarm.png" alt="Statefarm" title="Statefarm" />
			<img src="img/header-logos/time-warner.png" alt="Time Warner Company" title="Time Warner Company" />
			<img src="img/header-logos/verizon.png" alt="Verizon Foundation" title="Verizon Foundation" />
		</li>
	</ul>
</div>
-->
<div class="flash">
	<div>
		<p></p>
		<a class="close visuallyhidden" href="#"><span>x</span></a>
	</div>
</div>
<div class="top">
	<!--script type="text/javascript">
	function parseBannerText(data){
		if(data.hasOwnProperty('banner_text'))
			$(document).ready(function(){ $('.flash p').html(data.banner_text) });
	}
	</script>
	<script type="text/javascript" src="json/banner_text.json"></script-->
	<?php /* ?>
   	<div class="pre-header">
        <div class="wrapper cf">
        	<div class="tr brand-mobile">
				<h1 class="logo td">
					<a href="/">
						<img src="img/logo.png" alt="121212 Concert Logo" />
					</a>
				</h1>
				<div class="td info">
					<img src="img/desc.png" alt="The Concert for Sandy Relief to benefit The Robin Hood Relief Fund presented by Chase" />
				</div> <!-- .td -->
			</div> <!-- .tr -->
        </div> <!-- .wrapper -->
    </div> <!-- .pre-header -->
	<?php */ ?>
	<div class="main cf" role="main">
		<header role="header" class="table">
			<div class="tr brand cf">
				<h1 class="logo td">
					<a href="/">
						<img src="img/logo.png" alt="121212 Concert Logo" />
					</a>
				</h1>
				<div class="td info">
					<img src="img/desc.png" alt="The Concert for Sandy Relief to benefit The Robin Hood Relief Fund presented by Chase" />
				</div> <!-- .td -->
			</div> <!-- .tr -->
		</header> <!-- .table -->
		<div class="menu-wrap cf">
			<a href="https://www.robinhood.org/take-action/SandyRelief.aspx" class="btn donate donate-modal-link-off" target="_blank">Donate</a>
			<nav class="" role="navigation">
				<ul class="nav site">
					<li><span class="separator"><a href="https://twitter.com/search?q=%23121212Concert&src=hash" target="_blank">#121212Concert</a></span></li>
					<li><a href="broadcast" target="_blank">Watch</a></li>
					<li><a href="participate" target="_blank">Participate</a></li>
					<!--li><a href="social" target="_blank">Connect</a></li-->
					<li><a href="http://store.121212concert.org" target="_blank">Shop</a></li>
					<li><span class="separator">|</span></li>
					<li class="share"><span>Share</span></li>


					<li class="share share-fb"><a target="_blank" href="http://www.facebook.com/sharer.php?s=100&p[title]=<?php echo urlencode('"12-12-12" The Concert for Sandy Relief ')?>&t=<?php echo urlencode('"12-12-12" The Concert for Sandy Relief ')?>&p[url]=http%3A%2F%2Fwww.121212concert.org&p[summary]=<?php echo urlencode('On Wednesday at 7:30pm ET, I\'ll be watching "12-12-12" The Concert for Sandy Relief featuring: Bon Jovi, Eric Clapton, Dave Grohl, Billy Joel, Alicia Keys, Chris Martin, The Rolling Stones, Bruce Springsteen & the E Street Band, Eddie Vedder, Roger Waters, Kanye West, The Who, Paul McCartney.  The concert benefits the Robin Hood Relief Fund, which provides grants to community organizers in the tri-state area that are helping Hurricane Sandy victims rebuild and recover.')?>&p[images][0]=" class="icon-facebook"><span aria-hidden="true">Facebook</span></a></li>
					<li class="share share-tw"><a target="_blank" href="http://twitter.com/share?text=The%20%23121212Concert%20for%20%23SandyRelief%20featuring%20iconic%20artists%20airs%20live%20%40%207%3A30pm%20ET" class="icon-twitter"><span aria-hidden="true">Twitter</span></a></li>
				</ul> <!-- .nav -->
			</nav> <!-- g four-fifths -->
		</div> <!-- .menu-wrap -->
