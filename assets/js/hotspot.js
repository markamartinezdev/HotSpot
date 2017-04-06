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

    function toggleAppPage() {
        $('#hs-app-container').toggle();
        var resultsContainerMargin = $('header').height();
        $('#hs-app-content-container').css('margin-top', resultsContainerMargin + 50 + 'px');
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
    type = serchPerent.find('#hs-Type').val()
        //set type in var
    console.log(city);
    getFourData();
}
//call maps api
//get gio location of city
//pass location to var
//coll foursquar width location var



//function for getting value from serach input


function getFourData() {
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
            console.log("success");;
            populateResults(response);
        })
        .fail(function() {
            console.log("error");
        });

}


//----------------------------------------------------Mark
function populateResults(response) {
    var venuesObj = response.response.venues;
    console.log(type);
    var results = _.orderBy(venuesObj, ['hereNow.count'], ['desc']);
    console.log(results);
    var appResultsHtml = $('#hs-place-results').html();
    appResultsTemp = $(appResultsHtml);
    console.log(appResultsTemp);
    $('#hs-results-container').empty().append(appResultsTemp);
    //loop thrue all items
    for (i = 0; i < resultLimit; i++) {

            var appResultHtml = $('#hs-result').html();
            var appResultTemp = $(appResultHtml);
            //get amount of check ins 
            var here = results[i].hereNow.count;
            //get photo 
            var photo;
            var name = results[i].name;
            //get social id's
            var twitter;
            var facebook;
            //get location
            var address;
            //get type of location
            var cat = results[i].categories[0].name;
            var venueId = results[i].id;
            //set fire or ice
            if (here > 0) {
                rating = 'hotimage';
            } else {
                rating = 'coldimage';
            }
            //append a div with each location info and check in rating


            console.log(appResultTemp);
            appResultTemp.addClass('slideInUp ');
            appResultsTemp.append(appResultTemp);
            appResultsTemp.attr('venueId', venueId);
            appResultTemp.find('#name').text(name);
            appResultTemp.find('#type').text(cat);
            appResultTemp.find('#rating').text(rating);

    }

    $('#hs-results-container').append('<button id="load-more" class="btn">load more results</button>');
}

//append a div with each location info and check in rating
//when a location is selected 
//empty app content container div
//append divs to display  info on location page
