/**
 * @author
 */
var General = function(options) {
	
	
	var self = Ti.UI.createTableViewRow({
		width : '100%',
		height : 70		
	});
	
	self.id = options.id;
	
	var title = Ti.UI.createLabel({
		text : options.name,
		layout : {
			top : 10,
			left : 60
		}
	})
	
	var category = Ti.UI.createLabel({
		text : options.category,
		layout : {
			top : 20,
			left : 60
		}
	})
	
	var start_date = Ti.UI.createLabel({
		text : options.start_date,
		layout : {
			top : 25,
			left : 60
		}
		
	})
	
	var end_date = Ti.UI.createLabel({
		text : options.end_date,
		layout : {
			top : 30,
			left : 60
		}
	})
	
	var image = Ti.UI.createImageView({
		image : options.image, 
		layout : {
			top : 10,
			left : 10
		}
	})
	
	
	self.add(title);
	self.add(category);
	self.add(start_date);
	self.add(end_date);
	self.add(image);
	
	// default click handler
	self.addEventListener('click', function(e) {
		
	});
	
		
	return self;
}

module.exports = General;
