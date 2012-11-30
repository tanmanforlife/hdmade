<?php

  function linkify($status_text) {
    $status_text = preg_replace(
        '/(https?:\/\/\S+)/',
        '<a href="\1">\1</a>',
        $status_text
      );

    $status_text = preg_replace(
        '/(^|\s)@(\w+)/',
        '\1@<a href="http://twitter.com/\2">\2</a>',
        $status_text
    );

    $status_text = preg_replace(
        '/(^|\s)#(\w+)/',
        '\1#<a href="http://search.twitter.com/search?q=%23\2" class="preg-links">\2</a>',
        $status_text
      );

      return $status_text;
  }



  // Create an Array of Twitter Handles
  $handles = explode(",", get_option('twitter_handles'));

  // Loop through the Handles Array and get a JSON list of Tweets and add to a Tweets array
  foreach ($handles as $key=>$value) {

    $ch = curl_init("https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=" . $value . "&count=5");

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);

    $tweetsJSON = json_decode($response);

    foreach ($tweetsJSON as $t) {
      $tweets[] = array('text' => $t->text, 'user' => $t->user->screen_name, 'profile_image' => $t->user->profile_image_url);
    }
  }

  // Filter the tweets array for tweets containing #121212Concert
  foreach ($tweets as $key => $value) {
    if (stripos($value['text'], '#121212Concert')) {
      $filteredTweets[] = $value;
    }
  }

  //If the twitter feed is null e.g. if the API goes down then add some other content

  if ($filteredTweets != null) {

    // Output the filtered tweets to the site
    foreach ($filteredTweets as $tweeted) {

      echo "<li><div class='tweet-wrap'>";
      echo "<p>" . linkify($tweeted['text']) . "</p>";
      echo "<a href='http://twitter.com/" . $tweeted['user'] . "'><img src='" . $tweeted['profile_image'] . "' alt='" . $tweeted['user'] . " avatar' class='avatar' /></a>";
      echo "</div></li>";

    }
  }
  else { ?>

    <li>
      <div class='tweet-wrap'>
        <p>Tickets for <a href='https://twitter.com/search?q=%23121212concert&src=hash'>#121212concert</a> ft. Bruce & The E Street Band on sale 12/3 at 12p ET at <a href='http://ticketmaster.com'>http://ticketmaster.com</a> !</p>
        <a href='https://twitter.com/springsteen'><img src='https://twimg0-a.akamaihd.net/profile_images/2503639182/kvwh87erruwjrrqmgjrs.jpeg' class='avatar' alt='user avatar' /></a>
      </div>
    </li>

    <li>
      <div class='tweet-wrap'>
        <p>We're excited to be performing at <a href='https://twitter.com/search?q=%23121212concert&src=hash'>#121212concert</a> to benefit <a href='http://twitter.com/robinhoodnyc'>@robinhoodnyc</a> & those affected by #Sandy. Tix on sale MONDAY via Ticketmaster.</p>
        <a href='https://twitter.com/bon_jovi'><img src='https://twimg0-a.akamaihd.net/profile_images/2781133214/39ab766dcc1f3c04acf250025f3923c0_normal.png' class='avatar' alt='user avatar' /></a>
      </div>
    </li>

    <li>
      <div class='tweet-wrap'>
        <p>Paul will perform at Hurricane Sandy <a href='https://twitter.com/search?q=%23121212concert&src=hash'>#121212concert</a> at Madison Square Gardens. Details here: <a href='http://www.121212concert.org'>http://www.121212concert.org</a></p>
        <a href='https://twitter.com/PaulMcCartney'><img src='https://twimg0-a.akamaihd.net/profile_images/2459817551/saeosl0jonpeiovdjb3y_normal.jpeg' class='avatar' alt='user avatar' /></a>
      </div>
    </li>

    <li>
      <div class='tweet-wrap'>
        <p>Hey, our mates Eddie Vedder and <a href="http://twitter.com/foofightersdave">@FooFightersDave</a> Grohl are coming along too. Great! <a href="http://twitter.com/robinhoodnyc">@robinhoodnyc</a> <a href='https://twitter.com/search?q=%23121212concert&src=hash'>#121212concert</a></p>
        <a href='https://twitter.com/thewho'><img src='https://twimg0-a.akamaihd.net/profile_images/1961986092/269ce781-dc39-4848-8974-76801560236a_normal.png' class='avatar' alt='user avatar' /></a>
      </div>
    </li>

    <li>
      <div class='tweet-wrap'>
        <p>Big News abt <a href='https://twitter.com/search?q=%23121212concert&src=hash'>#121212concert</a>: Bon Jovi, Dave Grohl, & Eddie Vedder added to the lineup. Tix on sale 12/3 at 12p ET. <a href="http://ow.ly/i/1aSbk">http://ow.ly/i/1aSbk</a> </p>
        <a href='https://twitter.com/thewho'><img src='https://twimg0-a.akamaihd.net/profile_images/1961986092/269ce781-dc39-4848-8974-76801560236a_normal.png' class='avatar' alt='user avatar' /></a>
      </div>
    </li>



  <? }

?>