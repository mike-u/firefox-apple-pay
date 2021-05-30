function alertApplePay() {
	console.log('Im trying to notify');
	browser.notifications.create({
		"type": "basic",
		"iconUrl": browser.extension.getURL("icons/apple-wallet-48.png"),
		"title": "Apple Pay Supported",
		"message": "This website is trying to use Apple Pay."
	});
	console.log('I should have notified you');
}


//browser.notifications.onClicked.addListener(handleClick);