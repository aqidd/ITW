
/**
 * UI definition 
 * 
 */
var NavigationBar = require('ui/bar_navigation');
var Comm = require('utils/comm');
var GeneralModel = require('model/general');
var ListViewCategory = require('ui/listview_category');


/**
var FavoriteModel = require('model/favorite');
var GeneralModel = require('model/favorite');
var LocationModel = require('model/location');
**/

var mainWindow = Ti.UI.createWindow({
	title : "Indonesia This Week",
	width : Ti.Platform.displayCaps.platformWidth,
	height : Ti.Platform.displayCaps.platformHeight,
	fullscreen : true,
	navBarHidden : true,
	backgroundColor : "#FFFFFF"
});


// TODO : Some data need to be fetch from network
Ti.include('data.js');

// include header.js
Ti.include('ui/view_header.js');


var button = Ti.UI.createButton({
	title : "Test Ajax"
});

var comm = new Comm();

/**
var navigationBar = new NavigationBar({
	
});
**/

/**
var image = Ti.UI.createImageView({
	image : '/images/refresh-button.png',
	width : 50,
	height : 50,
	canScale : true
	
})
**/
mainWindow.addEventListener('open', function(e) {
});


//var navigationBar = new NavigationBar({},{});


// late binding

//mainWindow.add(tabbedBar);
mainWindow.add(Header);
/**
mainWindow.add(navigationBar.widget);
**/
//mainWindow.add(image);
//mainWindow.add(navigationBar.widget);
//mainWindow.add(GroupTabView);
//mainWindow.add(listView);


mainWindow.open();
