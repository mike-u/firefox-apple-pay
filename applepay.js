var ApplePaySession = {
	canMakePayments: function () {
		console.log('canMakePayments');
		// alert('canMakePayments was called')
		document.body.style.border = "5px solid red";
		//trying this example from Mozilla, maybe it will run even if the site can tell we don't fully support Apple Pay
		//I hope that it will only run when sites look for this and not on every site regardless of if it uses the element
		//This is a placeholder for whatever we'll do to actually alert the user in a normal way
		return Promise.resolve(true);
	},
	canMakePaymentsWithActiveCard: function () {
		console.log('canMakePaymentsWithActiveCard');
		// alert('CMPWAC was called')
		return Promise.resolve(true);
	},
	supportsVersion: function () {
		console.log('supportsVersion');
		return Promise.resolve(true);
	},
};

window.wrappedJSObject.ApplePaySession = cloneInto(
  ApplePaySession,
  window,
  {cloneFunctions: true});

// window.wrappedJSObject.canMakePaymentsWithActiveCard = cloneInto(
//   canMakePaymentsWithActiveCard,
//   window,
//   {cloneFunctions: true});

// exportFunction(canMakePayments, window.ApplePaySession, {defineAs:'canMakePayments'});
// exportFunction(canMakePaymentsWithActiveCard, window.ApplePaySession, {defineAs:'canMakePaymentsWithActiveCard'});
// //This seems like the right way to export these functions but they aren't console.logging or alerting anything.

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
