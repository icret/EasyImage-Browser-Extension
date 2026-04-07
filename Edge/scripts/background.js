chrome.action.onClicked.addListener(function () {
	chrome.windows.create({
		url: 'pages/tuchuang.html',
		width: 500,
		height: 500,
		focused: true,
		type: 'popup'
	});
});

// chrome.action.setBadgeText({text: 'new'});
// chrome.action.setBadgeBackgroundColor({color: [255, 0, 0, 255]});