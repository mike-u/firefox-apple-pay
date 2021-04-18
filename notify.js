// Got this example from https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications
var title = browser.i18n.getMessage("Apple Pay supported");
var content = browser.i18n.getMessage("This website is trying to use Apple Pay.", message.url);
browser.notifications.create({
  "type": "basic",
  "iconUrl": browser.extension.getURL("icons/apple-wallet-48.png"),
  "title": title,
  "message": content
});

//And this could be turned into a copy active URL on click in the future
//browser.notifications.onClicked.addListener(handleClick);
