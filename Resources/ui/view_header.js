var Header = Ti.UI.createView({
	width : Ti.Platform.displayCaps.platformWidth,
	top : 0,
	left : 0,
	height: 50,
	
	backgroundGradient: {
	    type: 'linear',
		startPoint: { x: '50%', y: '0%' },
		endPoint: { x: '50%', y: '50%' },
		colors: [ 
			{ color: '#769919', offset: 0.0}, 
			{ color: '#92BB90', offset: 0.25 }, 
			{ color: '#94C11C', offset: 1.0 } 
		],
	}
});

var Title = Ti.UI.createLabel({
	text : "myCo",
	font : {
		size : 10,
		color : "white"
	},
	left : 20,
	textAlign : 'left',
	verticalAlign : 'middle'
});

Header.add(Title);

var RefreshButton = Ti.UI.createButton({
	backgroundImage : "refresh-button.png",
	width : 30,
	height : 30,
	top : 10,
	right : 10
});

var AnimateColor = Ti.UI.createAnimation({
	backgroundColor : '#7BBF19',
	duration : 100,
	opacity : 0.8
});

var AnimateColorBackward = Ti.UI.createAnimation({
	backgroundColor : 'transparent',
	duration : 100,
	opacity : 1
});

AnimateColor.addEventListener('completed', function(src, type) {
	src.animate(AnimateColorBackward);
});

RefreshButton.addEventListener('click', function(e) {
	RefreshButton.animate(AnimateColor);
	
});

Header.add(RefreshButton);
