var ApplePaySession = {
	canMakePayments: function () {
		console.log('canMakePayments');
		// alert('This website supports Apple Pay')
		//I hope that it will only run when sites look for this and not on every site regardless of if it uses the element
		//This is a placeholder for whatever we'll do to actually alert the user in a normal way
		alertApplePay();
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

window.wrappedJSObject.ApplePaySession = cloneInto(
  ApplePaySession,
  window,
  {cloneFunctions: true});

function alertApplePay(){
	console.log('Im trying to notify');
	browser.notifications.create({
  "type": "basic",
  // "iconUrl": browser.extension.getURL("/icons/apple-wallet-48.png"),
  "title": "Apple Pay Supported",
  "message": "This website is trying to use Apple Pay."
});
}
