function checkForm(evt)
{
	evt.preventDefault();

	var theMusicianName = document.getElementById( "MusicianName" );
	var theInstrumet    = document.getElementById( "Instrument" );
	var theExperience   = document.getElementById( "YearsExperience" );
	var theEmail        = document.getElementById( "EmailAddress" );

	if( theMusicianName.value == "" )
	{
		doErrorDetails( "You forgot the musician name" );
	}
	else if( theInstrumet.value == "" )
	{
		doErrorDetails( "You forgot the Instrument" );
	}
	else if( theExperience.value == "" )
	{
		doErrorDetails( "You forgot the Years of Experience" );
	}
	else if( theEmail.value == "" )
	{
		doErrorDetails( "You forgot the Email Address" );
	}
	else
	{
		alert( "Thanks for all the info!" );
		document.getElementById( "frmMusician" ).submit();
	}
}

function doErrorDetails( theErrorMessage )
{
	var theDetails = document.getElementById( "errorDetails" );
	theDetails.innerHTML = theErrorMessage;
	showErrorMessages();
}

function hideErrorMessages()
{
	var el = document.getElementById( "errorMessages" );
	el.style.display = "none";
}

function showErrorMessages()
{
	var el = document.getElementById( "errorMessages" );
	el.style.display = "";
}
