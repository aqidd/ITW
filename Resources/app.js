
/**
 * UI definition 
 * 
 */
var NavigationBar = require('ui/bar_navigation');
var Comm = require('utils/comm');
var GeneralModel = require('model/general');
var ListViewByCategory = require('ui/listview_category');
var CompactView = require('ui/view_compact');

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





var newestCompetition = new CompactView({
	url : 'http://10.0.2.2/service/allEvent.php',
	title : 'Newest Competition',
	width : Ti.Platform.displayCaps.platformWidh,
	height : 200,
	top: 100,
	left : 0,
	model : GeneralModel,
	comm : new Comm()
});

var homeListView = new ListViewByCategory({
	title : 'Nearest Deadline Competition',
	sortBy : 'endDate',
	sortDirection : 'Ascending',
	url : 'http://10.0.2.2/service/allEvent.php',
	comm : new Comm(),
	model : GeneralModel,
	width : Ti.Platform.displayCaps.platformWidth,
	height : '100%',
	top : 180,
	left : 0
});
/**/
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



//var navigationBar = new NavigationBar({},{});




//mainWindow.add(testView);

// late binding

//mainWindow.add(tabbedBar);
mainWindow.add(Header);
mainWindow.add(newestCompetition.widget);
mainWindow.add(homeListView.widget);
/**
mainWindow.add(navigationBar.widget);
**/
//mainWindow.add(image);
//mainWindow.add(navigationBar.widget);
//mainWindow.add(GroupTabView);
//mainWindow.add(listView);


mainWindow.open();
