//if (window.ApplePaySession) {
   // The Apple Pay JS API is available.
  // alert("apple pay");
//}

if (typeof window.ApplePaySession === 'undefined') {
	return;
}
