function setMyTabByURL(urlString, callback) {
  var queryInfo = {
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
	  debugger;
	  var tab = null;
	  
	  for (var i = 0; i < tabs.length; i++) {
		  if (tabs[i].url.indexOf(urlString) > -1) { // Get the first tab with youtube in it
			  tab = tabs[i];
			  break;
		  }
	  }

	myTab = tab;
  });
}

document.addEventListener('DOMContentLoaded', function() {
	setMyTabByURL("youtube", null);
	
	var playButton = document.getElementById('playButton');
	
	playButton.addEventListener('click', function() {
		sendMessageToMyTab('play');
	});
});

function sendMessageToMyTab(message) {
	if (myTab) {
		chrome.tabs.sendMessage(myTab.id, {message: message}, null, null); // Send message to the selected tab
	}
	else {
		console.log("NO SELECTED TAB");
	}
}
