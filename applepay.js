var ApplePaySession = {
	canMakePayments: function () {
		console.log('canMakePayments');
		// alert('This website supports Apple Pay')
		alertApplePay();
		// browser.runtime.sendMessage()
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

function alertApplePay() {
	console.log('Im trying to notify');
	browser.notifications.create({
		"type": "basic",
		"iconUrl": browser.extension.getURL("icons/apple-wallet-48.png"),
		"title": "Apple Pay Supported",
		"message": "This website is trying to use Apple Pay."
	});
	console.log('I should have notified you');
};

window.wrappedJSObject.ApplePaySession = cloneInto(
	ApplePaySession,
	window,
	{cloneFunctions: true});
