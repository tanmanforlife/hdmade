<?php

	// Create an Array of Twitter Handles

	$handles = array('springsteen');

	// Loop through the Handles Array and get a JSON list of Tweets and add to a Tweets array

	$tweets = array();

	foreach ($handles as $h) {

		$ch = curl_init("http://search.twitter.com/search.json?q=121212concert&rpp=1&include_entities=true&result_type=mixed");

		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$tweets = curl_exec($ch);
		curl_close($ch);

		$tweets = json_decode($tweets);

		foreach ($tweets as $t) {
			foreach($tweets->results as $r) {

			}
		}
	}



