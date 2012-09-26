/**
 * @author
 */
var SearchBar = function(options) {
	var self = Ti.UI.createView({
		
	});
	
	self.textInput = Ti.UI.createTextField({
		width : 200,
		height : 30
	});
	
	self.searchButton = Ti.UI.createButton({
		image : '../images/search-button.png',
		width : 30,
		height : 30
	});
	
	self.textInput.addEventListener(function(e) {
		
	});
	
	self.searchButton.addEventListener(function(e) {
		if(options.currentListView != undefined) {
			
		}
	});
	
	self.add(self.textInput);
	self.add(self.searchButton);
}

module.exports = SearchBar;
