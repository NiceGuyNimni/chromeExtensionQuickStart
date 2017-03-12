chrome.runtime.onMessage.addListener(function(message, sender) { // Listen to messages from the popup.js
	var func = window[message.message];
	
	if (func) {
		func();
	}
});

function play() {
	$(".ytp-play-button.ytp-button").click();
}