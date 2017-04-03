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
//----------------------------------------------unassigned
//function for getting value from serach input
function getCityInput(){


}

//call ajax to get city L & L
	//set L & L in var

//use city L & L to search for trending locations
	//call ajax
	//empty app content container div
	$('#hs-app-content-container').empty();
	$('#hs-app-content-container').append('<div class"row" id="hs-results-Container"></div>');
}
//----------------------------------------------------Mark
//loop thrue all items
for(var i = 0; i < response.length; i++){
//get amount of check ins 
	var hereNow;
	//get photo 
	var photo;
	//get social id's
	var twitter;
	var facebook;
	//get location
	var address;
	//get type of location
	var type;
	//set fire or ice
	if(hereNow > 10){
		rating ='hotimage';
	}else{
		rating = 'coldimage';
	}
	//append a div with each location info and check in rating
	$('#hs-results-Container').append('<div class"col-md-3 hs-resul" venueId='+venueId+'><img id="hs-temp-icon" alt="" src="'+ rating +'" <img src="'+ photo +'"><h2>'+name+'</h2><p>'+type+'</p><p>get more details</p></div>');	
}

//----------------------------------------------------Gregg
//when a location is selected 
	//empty app content container div
		$('#hs-app-content-container').empty();
	//append divs to display  info on location page
