//css for landing page
//gets window height
var mainBody = window.innerHeight;

//sets height of main body wrapper
$('#hs-mainbody-wrapper').height(mainBody);

//when submit button on landing page is pressed
$('#hs-mainbody-submit').click(function() {
    event.preventDefault();
    //show the main app content
 $('#hs-mainbody-wrapper').addClass('slideOutUp');
 
    
    var show = setTimeout(toggleAppPage, 200);
    function toggleAppPage(){
        $('#hs-app-container').toggle();
        var resultsContainerMargin = $('header').height();
        $('#hs-app-content-container').css('margin-top',resultsContainerMargin + 50 + 'px');
    }
        
    //adds class to the landing page wrapper
    //added class slides out landing page
   
   

});
var city;
var lat;
var lng;
var ll;
var resultLimit = 10;
$('.hs-submit').click(getSearch);

function getSearch() {
    serchPerentDiv = $(this).parent().parent()[0];
    serchPerent = $(serchPerentDiv);
    //getting the value from search box
    city = serchPerent.find('input').val()
        //set type in var
    console.log(city);
    getCityLAndL();
}
//call maps api
//get gio location of city
//pass location to var
//coll foursquar width location var



//function for getting value from serach input


function getCityLAndL() {
    $.ajax({
            url: 'https://api.foursquare.com/v2/venues/search?v=20161016',
            medthod: 'GET',
            data: {
                near: city,
                client_id: 'I23VPE32IPM5CTJ0DLH0QD1AUGOMINAG5UVUHK11CZJDUUJC',
                client_secret: 'DST5ED0CW1XQZN2GY4QD2JLOZY1W5EUSCFC3OFME1ECFLBLI'
            }
        })
        .done(function(response) {
            console.log("success");
            lat = response.response.geocode.feature.geometry.center.lat;
            lng = response.response.geocode.feature.geometry.center.lng;
            ll = lat + "," + lng;
            getTrending();
        })
        .fail(function() {
            console.log("error");
        });

}

// use lat & lng to search for trending locations
function getTrending() {
    $.ajax({
            url: 'https://api.foursquare.com/v2/venues/trending?v=20161016',
            medthod: 'GET',
            data: {
                ll: ll,
                client_id: 'I23VPE32IPM5CTJ0DLH0QD1AUGOMINAG5UVUHK11CZJDUUJC',
                client_secret: 'DST5ED0CW1XQZN2GY4QD2JLOZY1W5EUSCFC3OFME1ECFLBLI'
            }
        })
        .done(function(response) {
            console.log("success");
            console.log(response.response.venues);
        populateResults(response);
        })
        .fail(function() {
            console.log("error");

        });

};


//----------------------------------------------------Mark
function populateResults(response) {

    $('#hs-app-content-container').empty();
    $('#hs-app-content-container').append('<div class"row" id="hs-results-Container"></div>');
    //loop thrue all items
    for (var i = 0; i < resultLimit; i++) {
        //get amount of check ins 
        var here = response.response.venue[i].hereNow.count;
        console.log(response);
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
        if (hereNow > 10) {
            rating = 'hotimage';
        } else {
            rating = 'coldimage';
        }
        //append a div with each location info and check in rating
        $('#hs-results-Container').append('here now'+ here + '   <br>');
    }

};

//append a div with each location info and check in rating
//when a location is selected 
//empty app content container div
//append divs to display  info on location page
