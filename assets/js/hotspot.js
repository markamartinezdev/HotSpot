var mainBody = window.innerHeight;
console.log(mainBody);
$('#hs-mainBody').height(mainBody);

$('#hs-mainbody-submit').on('click', function(){

	$('#hs-mainBody').addClass('slideOutUp');
});