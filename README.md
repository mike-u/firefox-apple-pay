# firefox-apple-pay

### Purpose:
Attempting to make a Firefox extension that alerts if a website supports Apple Pay

**It doesn't work yet**

### Sources:
- [SO post trying to accomplish this](https://stackoverflow.com/questions/57557939/getting-a-firefox-plugin-to-detect-and-mimic-attempts-to-check-for-apple-pay-sup)
- [Reddit post by same author asking for help](https://www.reddit.com/r/AppleCard/comments/csgqf4/firefox_plugin_to_detect_apple_pay_support/)
- [Stripe Apple Pay docs](https://stripe.com/docs/apple-pay)
- [Mozilla extension tutorial](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#testing)
- [Blog post about using Apple Pay](https://tech.justeattakeaway.com/2016/10/10/bringing-apple-pay-to-the-web/)


### Testing Apple Pay:
- https://stripe.com/apple-pay
- https://applepaydemo.apple.com/

### Current status:
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
