# firefox-apple-pay

### Purpose:
Attempting to make a Firefox extension that alerts if a website supports Apple Pay

**It works on some sites but not all of them**

### Sources:
- [SO post trying to accomplish this](https://stackoverflow.com/questions/57557939/getting-a-firefox-plugin-to-detect-and-mimic-attempts-to-check-for-apple-pay-sup)
- [Reddit post by same author asking for help](https://www.reddit.com/r/AppleCard/comments/csgqf4/firefox_plugin_to_detect_apple_pay_support/)
- [Stripe Apple Pay docs](https://stripe.com/docs/apple-pay)
- [Mozilla extension tutorial](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#testing)
- [Blog post about using Apple Pay](https://tech.justeattakeaway.com/2016/10/10/bringing-apple-pay-to-the-web/)
- [Inserting content scripts into page scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#cloneinto)


### Testing Apple Pay:
- [Stripe Demo page](https://stripe.com/apple-pay)
- [Apple demo page](https://applepaydemo.apple.com/)
- [Apple Lightning Cable page, should pop up a "check out with Apple Pay"](https://www.apple.com/shop/product/MX0K2AM/A/usb-c-to-lightning-cable-1-m?fnode=3870ceae8fdafc75e9145ae875be9910dce2ddf0902d9d75afcf1414caa326f2ac761bdbe4373f0aa3c1198e0f1b9eae676c62ee410b97b8ac0a663941efe30123b8999bd74092de3154b7218bcb86239b42efacf568e74623f669d5c58f9079613fe9d612d0033d447adbbc9dae2f49)
- [Minor Figures oat milk](https://us.minorfigures.com/cart) - works here
- [Nike](https://www.nike.com/) - doesn't work here

### Notes:
It seems like `window.ApplePaySession` is built into Safari and doesn't exist on other browsers, so it can't be used to check if we're on an Apple Pay website or not. There's an open [W3C Payment Request API](https://developer.apple.com/documentation/apple_pay_on_the_web/payment_request_api) that might have something that would work, but from my reading it seems unlikely and Firefox says they haven't implemented it.

However when I test with Safari, sites that don't have any checkout at all still have a `window.ApplePaySession` element, so maybe I'm referencing the wrong thing.

The only thing I can think of is to run Apple's own JS as the content script but I'm not sure how to source it.

---

OR maybe we can make a fake `window.ApplePaySession` to trick websites into thinking it exists. It seems like websites mostly use Apple's example test of:
```js
if (window.ApplePaySession && ApplePaySession.canMakePayments())
// Display Apple Pay Button
```
So if we can insert a fake element that resolves true, the button might show up but be nonfunctional. This may have been the idea of the SO post author.

I think this will be possible with the `cloneInto` content to page script function.

---
Added a cloneInto and it works for some sites but not others. They might be checking something else within ApplePaySession or the user agent. Switching user agent is kinda doing too much to just detect Apple Pay, I think it'd be good enough to just detect when sites look for ApplePaySession and alert the user then.

I found some good info about adding a browser notification but it's hard to test. Firefox seems to not allow self-loaded extensions to request notifications permissions. Just doing an `alert` inside the fake function ends up in triggering 4-5 times on most sites as they look for different stuff so running a notification inside that won't work too well anyway.

Mozilla's documentation says that the extension should be granted notifications permissions silently when it's loaded into Firefox. I'm able to call a function from within my fake Apple Pay Available function, but it won't send a notification. I also can't get a console.log to run after the browser.create should have run, so I think it might be erroring out somewhere beforehand.

Currently trying to use a separate [dev environment](https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Setting_up_extension_development_environment): `/Applications/Firefox.app/Contents/MacOS/firefox-bin -no-remote -P dev &`

This post (https://stackoverflow.com/questions/34912279/error-when-using-chrome-notifications-create-uncaught-typeerror-cannot-read-pr) says that content scripts in Chrome can't send notifications and you'd need to pass the info to a background script. That may be what's happening in FF too. This has some more info: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts

7/11 - Got the content to background message passing working. I'd like to do something to make sure that notifs only run once even if the inserted canMakePayments is called more than once on a page.

8/22 - Notifiction works and we can copy active URL but it doesn't only copy on click.