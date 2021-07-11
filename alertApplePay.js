// browser.runtime.onMessage.addListener(notify);

// function notify(message) {
//   browser.notifications.create({
//     "type": "basic",
//     // "iconUrl": browser.extension.getURL("icons/apple-wallet-48.png"),
//     "title": "You clicked a link!",
//     "message": message.url
//   });
// }

browser.runtime.onMessage.addListener((message) => {
  browser.notifications.create({
    type: "basic",
    title: "Apple Pay supported",
    message: message.content
  });
});


// browser.runtime.onMessage.addListener(alertApplePay);

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

