let myTab = null;

function setMyTabByURL(urlPattern, callback) {
  let queryInfo = {
    currentWindow: true,
		url: urlPattern
  };

  chrome.tabs.query(queryInfo, function(tabs = []) {
	  myTab = tabs[0]; // Get the first tab with youtube in it
  });
}

document.addEventListener('DOMContentLoaded', function() {
	setMyTabByURL("https://*.youtube.com/*", null);
	
	const playButton = document.getElementById('playButton');
	
	playButton.addEventListener('click', function() {
		sendMessageToMyTab('play');
	});
});

function sendMessageToMyTab(actionName) {
	if (myTab) {
		chrome.tabs.sendMessage(myTab.id, {actionName}, null, null); // Send message to the selected tab
	}
	else {
		console.log("NO TAB SELECTED");
	}
}
