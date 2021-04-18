var ApplePaySession = {
	canMakePayments: function () {
		// console.log('canMakePayments');
		// alert('This website supports Apple Pay')
		// document.body.style.border = "5px solid red";
		//trying this example from Mozilla, maybe it will run even if the site can tell we don't fully support Apple Pay
		//I hope that it will only run when sites look for this and not on every site regardless of if it uses the element
		//This is a placeholder for whatever we'll do to actually alert the user in a normal way
		// var title = browser.i18n.getMessage("Apple Pay supported");
		// var content = browser.i18n.getMessage("This website is trying to use Apple Pay.", message.url);
		// browser.notifications.create({
		//   "type": "basic",
		//   "iconUrl": browser.extension.getURL("icons/apple-wallet-48.png"),
		//   "title": title,
		//   "message": content
		// });
		return Promise.resolve(true);
	},
	canMakePaymentsWithActiveCard: function () {
		// console.log('canMakePaymentsWithActiveCard');
		// alert('CMPWAC was called')
		return Promise.resolve(true);
	},
	supportsVersion: function () {
		// console.log('supportsVersion');
		return Promise.resolve(true);
	},
};

// var title = browser.i18n.getMessage("Apple Pay supported");
// var content = browser.i18n.getMessage("This website is trying to use Apple Pay.", message.url);
// browser.notifications.create({
//   "type": "basic",
//   "iconUrl": browser.extension.getURL("icons/apple-wallet-48.png"),
//   "title": title,
//   "message": content
// });

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
