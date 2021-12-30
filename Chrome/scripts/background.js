chrome.browserAction.onClicked.addListener(function () {
	chrome.windows.create({
		url: 'pages/tuchuang.html',
		width: 500,
		height: 500,
		focused: true,
		type: 'popup'
	});
});

// chrome.browserAction.setBadgeText({text: 'new'});
// chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
