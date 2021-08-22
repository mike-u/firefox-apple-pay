var ApplePaySession = {
	canMakePayments: function () {
		notify("Click to copy URL for Safari");
		copyToClipboard(window.location.href);
		return Promise.resolve(false);
	},
	canMakePaymentsWithActiveCard: function () {
		return Promise.resolve(false);
	},
	supportsVersion: function () {
		return Promise.resolve(false);
	},
};

function notify(message) {
  browser.runtime.sendMessage({content:message});
}

function copyToClipboard(text) {
    function oncopy(event) {
        document.removeEventListener("copy", oncopy, true);
        // Hide the event from the page to prevent tampering.
        event.stopImmediatePropagation();

        // Overwrite the clipboard content.
        event.preventDefault();
        event.clipboardData.setData("text/plain", text);
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

