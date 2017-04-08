//css for landing page
//gets window height
var mainBody = window.innerHeight;
//gets background

//sets background 
//sets height of main body wrapper
$('#hs-mainbody-wrapper').height(mainBody);

//when submit button on landing page is pressed
$('#hs-mainbody-submit').click(function() {
    event.preventDefault();
    //show the main app content
    $('#hs-mainbody-wrapper').addClass('slideOutUp');
    var show = setTimeout(toggleAppPage, 1200);

    function toggleAppPage() {
        $('#hs-app-container').toggle();
        var resultsContainerMargin = $('header').height();
        $('#hs-app-content-container').css('margin-top', resultsContainerMargin + 50 + 'px');
    }
    //adds class to the landing page wrapper
    //added class slides out landing page
});
var input = document.getElementById('autocomplete');
var autocomplete = new google.maps.places.Autocomplete(input);
var venueId;
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
    city = serchPerent.find('input').val();
    type = 'city';
    //set type in var
    console.log(city);
    getFourData();
}
//function for getting value from serach input
function getFourData() {
    $.ajax({
            url: 'https://api.foursquare.com/v2/venues/search?v=20161016',
            medthod: 'GET',
            data: {
                near: city,
                radius: '10000',
                limit: '100',
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
    var filteredVenues = _.reject(venuesObj, function(venue) {
        return venue.categories.some(function(category) {
            if (category.name.toLowerCase().indexOf('city') >= 0 || category.name.toLowerCase().indexOf('bus') >= 0 || category.name.toLowerCase().indexOf('space') >= 0 || category.name.toLowerCase().indexOf('neighborhood') >= 0 || category.name.toLowerCase().indexOf('station') >= 0 || category.name.toLowerCase().indexOf('pharmacy') >= 0 || category.name.toLowerCase().indexOf('store') >= 0 || category.name.toLowerCase().indexOf('bank') >= 0) {
                return true;
            } else {
                return false;
            }

        });
    });
    console.log(type);
    console.log(filteredVenues);
    var results = _.orderBy(filteredVenues, ['hereNow.count'], ['desc']);
    console.log(results);
    var appResultsHtml = $('#hs-place-results').html();
    appResultsTemp = $(appResultsHtml);
    console.log(appResultsTemp);
    $('#hs-results-container').empty().append(appResultsTemp);
    if(results.length == 0){
        $('#hs-results-container').empty().append("<h1>Sorry, there's nothing going on in this area.</h1> ")
    }else{
    //loop thrue all items
    for (i = 0; i < resultLimit; i++) {

        var appResultHtml = $('#hs-result').html();
        var appResultTemp = $(appResultHtml);
        //get amount of check ins 
        var here = results[i].hereNow.count;
        venueId = results[i].id;
        var name = results[i].name;
        //get social id's
        var twitter;
        var facebook;
        //get location
        var address;
        //get type of location
        var cat = results[i].categories[0].name;
        //set fire or ice
        if (here > 0) {
            rating = 'assets/img/fire.png';
        } else {
            rating = 'assets/img/ice.png';
        }
        //append a div with each location info and check in rating
        getphotos();
        //append a div with each location info and check in rating
        console.log(appResultTemp);
        appResultsTemp.append(appResultTemp);
        appResultTemp.addClass('slideInUp ');
        appResultTemp.attr('venueId', venueId);
        appResultTemp.find('#hs-place-image').attr('src', photoUrl);
        appResultTemp.find('#hs-place-rating').attr('src', rating);
        appResultTemp.find('#name').text(name);
        appResultTemp.find('#type').text(cat);
    }
    $('#hs-results-container').append('<button id="load-more" class="btn">Load More Results</button>');
    }
}
//get photo for venue
function getphotos() {
    $.ajax({
        url: 'https://api.foursquare.com/v2/venues/' + venueId + '/photos?v=20170404',
        medthod: 'GET',
        data: {
            client_id: 'I23VPE32IPM5CTJ0DLH0QD1AUGOMINAG5UVUHK11CZJDUUJC',
            client_secret: 'DST5ED0CW1XQZN2GY4QD2JLOZY1W5EUSCFC3OFME1ECFLBLI'
        },
        async: false
    }).done(function(response) {
        var pre = response.response.photos.items[0].prefix;
        var suf = response.response.photos.items[0].suffix;
        var size = '500x500';
        photoUrl = pre + size + suf;
        console.log(photoUrl);
    });

}
$('body').on('click', '.result-container', function() {

    venueId = $(this).attr('venueId');
    console.log(venueId);
    venuePage();

});

function venuePage(response) {
    var venuesObj = response.response.venues;

    var appResultsHtml = $('#hs-place-results').html();
    appResultsTemp = $(appResultsHtml);

    $('#hs-results-container').empty().append(appResultsTemp);
    //loop thrue all items


    var venueResult = $('#hs-Location-page').html();
    var venueResultTemp = $(venueResult);
    //get amount of check ins 
    var here = venuesObj[i].hereNow.count;
    var name = venuesObj[i].name;
    //get social id's
    var twitter;
    var facebook;
    //get location
    var address;
    //get type of location
    var cat = venuesObj[i].categories[0].name;
    var venueId = venuesObj[i].id;
    //set fire or ice
    if (here > 0) {
        rating = 'assets/images/fire.png';
    } else {
        rating = 'assets/images/ice.png';
    }
    //append a div with each location info and check in rating

    venueResultsTemp.append(venueResultTemp);
    venueResultTemp.addClass('slideInUp');
    venueResultsTemp.attr('venueId', venueId);
    venueResultTemp.find('#name').text(name);
    venueResultTemp.find('#type').text(cat);
    venueResultTemp.find('#rating').text(rating);

}


//append a div with each location info and check in rating
//when a location is selected 
//empty app content container div
//append divs to display  info on location page
