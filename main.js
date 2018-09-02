$('#bottom-button').click(function() {
	event.preventDefault()
	$('.hide').slideToggle()
	$('#bottom-button').hide()
})

$('#submit-button').click(function () {
	event.preventDefault()

	if ($('input').val('')) {
		$('#error').show()
		console.log('yay');
	} else {
		$('#success').show()
		console.log('wot');
	}
})



								// *            * //
								// STRUGGLE TOWN  //
								// POPULATION: ME //
								// *            * //


// errorPlacement: function(error, element) {
//  element.attr("placeholder",error.text())
// }

// if ($('input').val('')) {
	// 	$('placeholder').text('You will need to fill out this area before signing up.')
	// }	else {
	// }
	//
	// $(".button yellow").click(function() {
	//     $([document.documentElement, document.body]).animate({
	//         scrollTop: $("#bottom-cta").offset().top
	//     }, 2000);
	// })
