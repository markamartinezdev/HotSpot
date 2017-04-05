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
 
    var resultsContainerMargin = $('header').height();
    var show = setTimeout(toggleAppPage, 200);
    function toggleAppPage(){
        $('#hs-app-container').toggle();
        $('#hs-app-content-container').css('margin-top',resultsContainerMargin + 50 + 'px');
    }
        
    //adds class to the landing page wrapper
    //added class slides out landing page
   
   

});

var resultLimit = 10;
$('.hs-submit').click(getSearch);

function getSearch() {
    serchPerentDiv = $(this).parent().parent()[0];
    serchPerent = $(serchPerentDiv);
    //getting the value from search box
    city = serchPerent.find('input').val()
        //set type in var
    console.log(city);
    callFourSquar();
}
//call maps api
//get gio location of city
//pass location to var
//coll foursquar width location var

function callFourSquar() {
    $.ajax({
            url: 'https://api.foursquare.com/v2/venues/search?v=20161016',
            medthod: 'GET',
            data: {
                near: city,
                limit: resultLimit,
                client_id: 'I23VPE32IPM5CTJ0DLH0QD1AUGOMINAG5UVUHK11CZJDUUJC',
                client_secret: 'DST5ED0CW1XQZN2GY4QD2JLOZY1W5EUSCFC3OFME1ECFLBLI'
            }
        })
        .done(function(response) {
            //call populate function
            populateResults(response);
            console.log(response.response.venues.length);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
}

//----------------------------------------------------Mark
function populateResults(response) {

    $('#hs-app-content-container').empty();
    $('#hs-app-content-container').append('<div class"row" id="hs-results-Container"></div>');
    //loop thrue all items
    for (var i = 0; i < response.response.venues.length; i++) {
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
        if (hereNow > 10) {
            rating = 'hotimage';
        } else {
            rating = 'coldimage';
        }
        //append a div with each location info and check in rating
        $('#hs-results-Container').append('result'+ i + '   <br>');
    }

}

//append a div with each location info and check in rating
//when a location is selected 
//empty app content container div
//append divs to display  info on location page
