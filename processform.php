<?
	if( !isset( $_POST[ "MusicianName" ] ) )
	{
		print( "Musician Name is a required field" );
		exit;
	}
	else if( !isset( $_POST[ "Instrument" ] ) )
	{
		print( "Instrument is a required field" );
		exit;
	}
	else
	{
		$message  = "You saved these things to the database:<br>";
		$message .= "Name: " . $_POST[ "MusicianName" ];
		$message .= "<br>";
		$message .= "Instrument: " . $_POST[ "Instrument" ];
		$message .= "<br>";

		if( $_POST[ "YearsExperience" ] == "" )
		{
			$message .= "You left the Years of Experience blank.";
			$message .= "<br>";
		}
		else
		{
			$message .= "Years experience:{$_POST["YearsExperience"]}";
			$message .= "<br>";	 
		}

		if( $_POST[ "EmailAddress" ] == "" )
		{
			$message .= "You left the Email Address blank.";
			$message .= "<br>";
		}
		else
		{
			$message .= "Email address: {$_POST["EmailAddress"]}";
			$message .= "<br>";	 
		}

		print( $message );
	}

?>