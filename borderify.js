//document.body.style.border = "5px solid red";
//console.log('you are on mozilla.org');
//alert("you are on mozilla org");

window.ApplePaySession = {
	canMakePayments: function () {
		console.log('canMakePayments');
		return Promise.resolve(true);
	},
	canMakePaymentsWithActiveCard: function () {
		console.log('canMakePaymentsWithActiveCard');
		Promise.resolve(true);
	},
};

function notify(message) {
	console.log("apple pay supported");
	alert('apple pay supported');
}

exportFunction(notify, window, {defineAs:'notify'});
console.log(window.ApplePaySession);

if (typeof ApplePaySession === 'undefined') {
	return;
}


//copied this part from Apple's source
if (ApplePaySession && ApplePaySession.canMakePayments()) {

	$('.unsupportedBrowserMessage').css('display', 'none');
	$('.applePayButton').css('display', 'block');

	console.log('Startup Check: Device is capable of making Apple Pay payments');

}
