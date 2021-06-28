var ApplePaySession = {
	canMakePayments: function () {
		console.log('canMakePayments');
		// alert('This website supports Apple Pay')
		// alertApplePay();
		browser.runtime.sendMessage({"url": e.target.href}); //pass info to background script here
		return Promise.resolve(true); // if notifications work then return false here instead
	},
	canMakePaymentsWithActiveCard: function () {
		console.log('withActiveCard');
		return Promise.resolve(true);
	},
	supportsVersion: function () {
		console.log('supportsVersion');
		return Promise.resolve(true);
	},
};

// function alertApplePay() {
// 	console.log('I\'m trying to notify');
// 	var creating = browser.notifications.create({
// 		"type": "basic",
// 		"iconUrl": browser.runtime.getURL("icons/apple-wallet-48.png"),
// 		"title": "Apple Pay Supported",
// 		"message": "This website is trying to use Apple Pay."
// 	});
// 	console.log(creating);
// 	console.log('I should have notified you');
// }

window.wrappedJSObject.ApplePaySession = cloneInto(
	ApplePaySession,
	window,
	{cloneFunctions: true});
