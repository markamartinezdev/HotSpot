//css for landing page
//gets window height
var mainBody = window.innerHeight;
console.log(mainBody);
//sets height of main body wrapper
$('#hs-mainbody-wrapper').height(mainBody);

//when submit button on landing page is pressed
$('#hs-mainbody-submit').on('click', function(){
	//show the main app content
	$('#hs-app-container').toggle();
	//adds class to the landing page wrapper
	//added class slides out landing page
	$('#hs-mainbody-wrapper').addClass('slideOutUp');
	// getCityInput();	
});

//function for getting value from serach input
function getCityInput(){


}

//call ajax to get city L & L
	//set L & L in var

//use city L & L to search for trending locations
	//call ajax

//loop thrue all items
	//get amount of check ins 
	//get photo 
	//get social id's
	//get location
	//get type of location
		//empty app content container div
		//append a div with each location info and check in rating



//when a location is selected 
	//empty app content container div
	//append divs to display  info on location page
