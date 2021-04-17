//document.body.style.border = "5px solid red";
//console.log('you are on mozilla.org');
//alert("you are on mozilla org");

window.ApplePaySession = {
	canMakePayments: function () {
		console.log('canMakePayments');
		alert('canMakePayments was called')
		return Promise.resolve(true);
	},
	canMakePaymentsWithActiveCard: function () {
		console.log('canMakePaymentsWithActiveCard');
		alert('CMPWAC was called')
		Promise.resolve(true);
	},
};

// function notify(message) {
// 	console.log("apple pay supported");
// 	alert('apple pay supported');
// }

exportFunction(canMakePayments, window.ApplePaySession, {defineAs:'canMakePayments'});
exportFunction(canMakePaymentsWithActiveCard, window.ApplePaySession, {defineAs:'canMakePaymentsWithActiveCard'});
//This seems like the right way to export these functions but they aren't console.logging or alerting anything.

//
// //copied this part from Apple's source
// if (ApplePaySession && ApplePaySession.canMakePayments()) {
//
// 	$('.unsupportedBrowserMessage').css('display', 'none');
// 	$('.applePayButton').css('display', 'block');
//
// 	console.log('Startup Check: Device is capable of making Apple Pay payments');
//
// }


//if (window.ApplePaySession) {
   // The Apple Pay JS API is available.
  // alert("apple pay");
//}

if (typeof window.ApplePaySession === 'undefined') {
	return;
}
