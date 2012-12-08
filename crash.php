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
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>121212 Concert</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <!--[if IE]>
        <script type="text/javascript" src="js/html5.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="icon" type="image/png" href="img/favicon.png" />
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
    <script src="js/modernizr.min.js"></script>
    <!--[if (gte IE 6)&(lte IE 8)]>
        <script type="text/javascript" src="js/selectivizr.min.js"></script>
    <![endif]-->

</head>
<body id="crash">

<a href="#" class="sponsor-banner">
    This is a sponsor banner
</a>

<div class="top">
    <script type="text/javascript">
    function parseBannerText(data){
        if(data.hasOwnProperty('banner_text'))
            $(document).ready(function(){ $('.flash p').html(data.banner_text) });
    }
    </script>
    <script type="text/javascript" src="json/banner_text.json"></script>
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
        <header role="header" class="cf">
                <h1 class="logo">
                    <a href="/">
                        <img src="img/121212-logo-404.png" alt="121212 Concert Logo" />
                    </a>
                </h1>
                
                    <!-- Donate -->
                    <div id="donate-popup">
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
                                    <input type="radio" value="custom" class="custom" /> $&nbsp;<input type="text" name="amount" id="amazon_amount" value="" />
                                    <input type="submit" id="submit_donate" class="btn donate" value="Donate" border="0">
                                </div>            
                                <div class="error"></div>
                            </form>
                            <p>Your donation will serve the victims of Hurricane Sandy through the Robin Hood Releif Fund.  You will be redirected to Amazon to complete the payment process.</p>
                    </div>
                    <!-- #donate -->
        </header> <!-- .table -->
        
        <!-- Video -->
        <div id="video-stream">
            <object type="application/x-shockwave-flash" id="twelvePlayer" name="twelvePlayer" data="http://static.iheart.com/121212/amp.clearchannel/ClearChannelPlayer.swf">
                <param name="allowFullScreen" value="true">
                <param name="allowScriptAccess" value="always"><param name="wmode" value="direct">
                <param name="bgColor" value="#000000">
                <param name="flashvars" value="settings_url=http://static.iheart.com/121212/amp.clearchannel/player.flash.xml&amp;auto_play=false&amp;data_feed_url=http://static.iheart.com/121212/amp.clearchannel/feed.json&amp;ticker_text_url=http://static.iheart.com/121212/resources/ticker.txt&amp;ticker_polling_interval=3000&amp;ticker_speed=2&amp;report_playerId=iHeartRadioAkamaiEventPlayer&amp;report_device=undefined"><
            </object>
        </div>
        <!-- #video stream -->
</div> <!-- .top -->
<?php include 'footer.php'; ?>
