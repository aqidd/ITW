/**
 * @author
 */
var General = function(options, data) {
	
	if(options.functionView != undefined) {
		options.functionView = Ti.UI.createTableView;
	}
	
	var self = options.functionView({
		width : options.width,
		height : options.height,
		top : options.layout.top,
		left : options.layout.left		
	});
	
	self.id = data.id;
	
	var title = Ti.UI.createLabel({
		text : data.title,
		layout : {
			top : 10,
			left : 100
		}
	})
	var category = Ti.UI.createLabel({
		text : data.category,
		layout : {
			top : 40,
			left : 100
		}
	})
	
	var start_date = Ti.UI.createLabel({
		text : data.startDate,
		layout : {
			top : 60,
			left : 100
		}
		
	})
	
	var end_date = Ti.UI.createLabel({
		text : data.endDate,
		layout : {
			top : 30,
			left : 60
		}
	})
	
	var image = Ti.UI.createImageView({
		image : data.image, 
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
