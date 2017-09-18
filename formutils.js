function checkForm( evt )
{
	evt.preventDefault();

	var theMusicianName = document.getElementById( "MusicianName" );
	var theInstrument   = document.getElementById( "Instrument" );

	if( theMusicianName.value == "" )
	{
		doErrorDetails( "You forgot the Musician Name" );
	}
	else if( theInstrument.value == "" )
	{
		doErrorDetails( "You forgot the Instrument." );
	}
	else
	{
		document.getElementById( "frmMusician" ).submit();
	}
}

function hideErrorMessages()
{
	var theErrorPanel = document.getElementById( "errorMessages" );
	theErrorPanel.style.display = "none";
}

function doErrorDetails( theErrorMessage )
{
	var theDetails = document.getElementById( "errorDetails" );
	theDetails.innerHTML = theErrorMessage;
	showErrorMessages();
}

function showErrorMessages()
{
	var el = document.getElementById( "errorMessages" );
	el.style.display = "";
}
