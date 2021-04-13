# firefox-apple-pay
Attempting to make a Firefox extension that alerts if a website supports Apple Pay

### Sources:
- https://stackoverflow.com/questions/57557939/getting-a-firefox-plugin-to-detect-and-mimic-attempts-to-check-for-apple-pay-sup
- https://www.reddit.com/r/AppleCard/comments/csgqf4/firefox_plugin_to_detect_apple_pay_support/
- https://stripe.com/docs/apple-pay
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#testing

### Testing Apple Pay:
- https://stripe.com/apple-pay
- https://applepaydemo.apple.com/

### Current status:
It seems like `window.ApplePaySession` is built into Safari and doesn't exist on other browsers, so it can't be used to check if we're on an Apple Pay website or not. There's an open [W3C Payment Request API](https://developer.apple.com/documentation/apple_pay_on_the_web/payment_request_api) that might have something that would work, but from my reading it seems unlikely and Firefox says they haven't implemented it.
