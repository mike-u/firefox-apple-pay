browser.runtime.onMessage.addListener((message) => {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.runtime.getURL("icons/apple-wallet-48.png"),
    title: "Apple Pay supported",
    message: message.content
  });
});
