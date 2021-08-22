var ApplePaySession = {
	canMakePayments: function () {
		console.log('canMakePayments');
		notify("Click to copy URL for Safari");
		copyToClipboard(window.location.href);
		// browser.runtime.sendMessage({"url": e.target.href}); //pass info to background script here
		// return Promise.resolve(true); // if notifications work then return false here instead
		return Promise.resolve(false);
	},
	canMakePaymentsWithActiveCard: function () {
		// console.log('withActiveCard');
		// return Promise.resolve(true);
		return Promise.resolve(false);
	},
	supportsVersion: function () {
		// console.log('supportsVersion');
		// return Promise.resolve(true);
		return Promise.resolve(false);
	},
};

function notify(message) {
  browser.runtime.sendMessage({content:message});
}

function copyToClipboard(text, html) {
    function oncopy(event) {
        document.removeEventListener("copy", oncopy, true);
        // Hide the event from the page to prevent tampering.
        event.stopImmediatePropagation();

        // Overwrite the clipboard content.
        event.preventDefault();
        event.clipboardData.setData("text/plain", text);
        event.clipboardData.setData("text/html", html);
    }
    document.addEventListener("copy", oncopy, true);

    // Requires the clipboardWrite permission, or a user gesture:
    document.execCommand("copy");
}


window.wrappedJSObject.ApplePaySession = cloneInto(
	ApplePaySession,
	window,
	{cloneFunctions: true});

exportFunction(notify, window, {defineAs:'notify'});
exportFunction(copyToClipboard, window, {defineAs:'copyToClipboard'});

