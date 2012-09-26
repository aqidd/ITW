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
	},
	left : 20,
	color : '#FFFFFF',
	textAlign : 'left',
	verticalAlign : 'middle'
});

Header.add(Title);

var res_path = Ti.Filesystem.resourcesDirectory;

var RefreshButton = Ti.UI.createButton({
	//title : 'R',
	backgroundImage : res_path + "refresh-button.png",
	width : 30,
	height : 30,
	top : 10,
	right : 10,
	canScale : true
});

var OpactityAnimation = Ti.UI.createAnimation({
	//backgroundColor : '#7BBF19',
	duration : 100,
	opacity : 0.1,
	autoreverse : true,
	curve : Ti.UI.ANIMATION_CURVE_EASE_IN
});


RefreshButton.addEventListener('click', function(e) {
	RefreshButton.animate(OpactityAnimation);	
});

Header.add(RefreshButton);
