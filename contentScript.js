chrome.runtime.onMessage.addListener(function(message, sender) { // Listen to messages from the popup.js
	if (message.actionName === "play")
		play();
});

function play() {
	$(".ytp-play-button.ytp-button").click();
}