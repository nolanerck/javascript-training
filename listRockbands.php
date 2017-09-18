<?
	$aryBands = array( "Depeche Mode",
					   "Green Day",
					   "7 Seconds",
					   "New Order",
					   "Bastille",
					   "The John Mayer Trio",
					   "Primus",
					   "Megadeth",
					   "slayer",
					   "Kraftwerk",
					   "The Beatles" );

	$bandsEncoded = json_encode( $aryBands );

	if( isset( $_GET[ "index" ] ) )
	{
		$idx = $_GET[ "index" ];
		print( $aryBands[ $idx ] );
	}
	else
	{
		print( $bandsEncoded );
	}
?>