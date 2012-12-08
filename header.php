<?php
// Start output buffering so we can add headers throughout the request.
ob_start();

// Set up a 5 minute TTL that Varnish will respect.
if ($_SERVER['REQUEST_METHOD'] === 'GET' || $_SERVER['REQUEST_METHOD'] === 'HEAD') {
  header("Cache-Control: public, max-age=300");
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
   
	<script> // Springsteen Fix
	var shorturl=/121212bruce/g;
		if(shorturl.test(document.referrer)) {
   			window.location = "http://youtu.be/1mRHNiVJl4U";
	}
	</script>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>121212 Concert</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!--[if IE]>
        <script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="icon" type="image/png" href="img/favicon.png" />
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
    <!--[if (gte IE 6)&(lte IE 8)]>
        <script type="text/javascript" src="js/selectivizr.min.js"></script>
    <![endif]-->

</head>
<body<?php if(isset($body_class)) echo ' class="'.$body_class.'"'; ?>>
<div id="donate-popup" style="display: none;">
	<h1>Donate</h1>
	<p>Your donation will serve the victims of Hurricane Sandy through the Robin Hood Releif Fund.  You will be redirected to Amazon to complete the payment process.</p>
	<!--a href="" class="btn donate">Donate</a-->
	<form id="donate-form" action="https://authorize.payments-sandbox.amazon.com/pba/paypipeline" method="post" target="_blank">
		<input type="hidden" name="returnUrl" value="http://www.121212concert.org/" >
		<input type="hidden" name="processImmediate" value="1" >
		<input type="hidden" name="accessKey" value="11SEM03K88SD016FS1G2" >
		<input type="hidden" name="signatureMethod" value="HmacSHA256" >
		<input type="hidden" name="collectShippingAddress" value="0" >
		<input type="hidden" name="isDonationWidget" value="1" >
		<input type="hidden" name="amazonPaymentsAccountId" value="LDAYRQYTKPGM5JEC2MMHHS2UDUZ3CE882PINP9" >
		<input type="hidden" name="cobrandingStyle" value="logo" >
		<input type="hidden" name="immediateReturn" value="1" >
		<input type="hidden" name="description" value="Donate to Benefit the Robin Hood Relief Fund" >
		<input type="hidden" name="abandonUrl" value="http://www.121212concert.org/" >
		<input type="hidden" name="signatureVersion" value="2" >
		<input type="hidden" name="signature" value="sZLo+VGDub96fDdPbM8v5uP7sVV4GW58nXmLw7mRgcc=" >
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
<div class="sponsor-banner flexslider-fade">
	<ul class="slides cf">
		<li><a href="#"><img src="img/header-logos/optimum.png" alt="Optimum Lightpath" title="Optimum Lightpath" /></a>
			<a href="#"><img src="img/header-logos/samsung.png" alt="Samsung Galaxy" title="Samsung Galaxy" /></a>
			<a href="#"><img src="img/header-logos/statefarm.png" alt="Statefarm" title="Statefarm" /></a>
			<a href="#"><img src="img/header-logos/time-warner.png" alt="Time Warner Company" title="Time Warner Company" /></a>
			<a href="#"><img src="img/header-logos/verizon.png" alt="Verizon Foundation" title="Verizon Foundation" /></a></li>
	</ul>
</div>
<div class="flash">
	<div>
		<p></p>
		<a class="close" href="#"><span>x</span></a>
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
			<div class="tr brand">
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
			<a href="#donate-popup" class="btn donate donate-modal-link">Donate</a>
			<nav class="" role="navigation">
				<ul class="nav site">
					<li><span class="separator">#121212Concert</span></li>
					<li><a href="broadcast.php" target="_blank">Watch on TV</a></li>
					<li><a href="social.php" target="_blank">Social</a></li>
					<li><a href="#" target="_blank">Shop</a></li>
					<li><span class="separator">|</span></li>
					<li class="share"><a href="#">Share</a></li>
					<li class="share share-fb"><a href="http://www.facebook.com/sharer.php?u=<?php echo urlencode('http://www.121212concert.org'); ?>" class="icon-facebook"><span aria-hidden="true">Facebook</span></a></li>
					<li class="share share-tw"><a href="#" class="icon-twitter"><span aria-hidden="true">Twitter</span></a></li>
				</ul> <!-- .nav -->
			</nav> <!-- g four-fifths -->
		</div> <!-- .menu-wrap -->