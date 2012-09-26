
/**
 * UI definition 
 * 
 */
var NavigationBar = require('ui/bar_navigation');
var Comm = require('utils/comm');
var ListViewCategory = require('ui/listview_category');
var FavoriteModel = require('model/favorite');
var GeneralModel = require('model/favorite');
var LocationModel = require('model/location');


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


mainWindow.addEventListener('open', function(e) {
});


//var navigationBar = new NavigationBar({},{});



/**
var labelTest = Ti.UI.createLabel({
	text : "Hello world"
})

var win1 = Ti.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Ti.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Ti.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
GroupTabView.addTab(win1);
GroupTabView.open();

**/
// late binding

//mainWindow.add(tabbedBar);
mainWindow.add(Header);
//mainWindow.add(navigationBar.widget);
//mainWindow.add(GroupTabView);
//mainWindow.add(listView);


mainWindow.open();
