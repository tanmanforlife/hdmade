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

    if(is_array($tweetsJSON)){
        foreach ($tweetsJSON as $t) {
          $tweets[] = array('text' => $t->text, 'user' => $t->user->screen_name, 'profile_image' => $t->user->profile_image_url);
        }
    }
    
  }

  // Filter the tweets array for tweets containing #121212Concert
  foreach ($tweets as $key => $value) {
    if (stripos($value['text'], '#121212Concert')) {
      $filteredTweets[] = $value;
    }
  }

  // Output the filtered tweets to the site
  if(!empty($filteredTweets)){
      foreach ($filteredTweets as $tweeted) {

        echo "<li><div class='tweet-wrap'>";
        echo "<p>" . linkify($tweeted['text']) . "</p>";
        echo "<a href='http://twitter.com/" . $tweeted['user'] . "'><img src='" . $tweeted['profile_image'] . "' alt='" . $tweeted['user'] . " avatar' class='avatar' /></a>";
        echo "</div></li>";

      }
  }

?>