
var ToggleButton = function(options) {
	var self = this;
	
	self.image_idle = options.image_idle;
	self.image_active = options.image_active;
	self.active = options.active;
	
	self.widget = Ti.UI.createButton({
		image : self.image_idle,
		width : 40,
		height : 40
	});
	
	return self;
};

var NavigationBar = function(options, data) {
	
	var self = this;
	
	self.widget = Ti.UI.createView({
		top : 0,
		width : Ti.Platform.displayCaps.platformWidth,
		height : 30
	});
	
	self.buttons = [];
	
	for(var ii = 0; ii < data.length; ii++) {
		
		var newToggleButton = new ToggleButton({
			image_idle : Ti.UI.createImageView({
				image : data[ii].image_idle
			}),
			image_active : Ti.UI.createImageView({
				image : data[ii].image_active
			}),
			active : (ii == options.active_index ) ? (true) : (false) 
		});


		this.add(newToggleButton.widget);
	}
	
	self.current_tab_index = options.active_index;
	
	for(var ii = 0; ii < self.buttons.length; ii++) {
		self.buttons[ii].widget.addEventListener('click', function(src) {
			
			self.buttons[ii].active = true;
			for(var jj = 0; jj < self.buttons.length; jj++) {
				self.buttons[ii].active = false;
			}
			
			data[ii].handler(options.views);
		});
	}
	
	return self;
	
}

module.exports = NavigationBar;
module.exports = ToggleButton;