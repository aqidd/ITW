/**
 * @author
 */
var General = function(options, data) {
	
	Ti.API.info(JSON.stringify(data));
	
	if(options.functionView == undefined) {
		options.functionView = Ti.UI.createTableViewRow;
		
	}
	
	var self = options.functionView({
		width : options.width,
		height : options.height,
		top : options.top,
		left : options.left,
		layout  : 'vertical'	
	});
	
	
	
	self.id = data.id;
	
	
	var title = Ti.UI.createLabel({
		text : data.title,
		top : 10,
		left : 100,
		color : 'black',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		
		}
		

	});
	
	var category = Ti.UI.createLabel({
		text : data.category,
		top : 5,
		left : 100,
		color : 'black',
		font : {
			fontSize : 8
		}
	})
	
	var start_date = Ti.UI.createLabel({
		text : "Start Date : " +  data.startDate,
		top : 5,
		left : 100,
		color : 'black',
		font : {
			fontSize : 8
		}
	})
	
	var end_date = Ti.UI.createLabel({
		text : "End Date : " + data.endDate,
		top : 5,
		left : 100,
		color : 'black',
		font : {
			fontSize : 8
		}
	})
	/**
	var image = Ti.UI.createImageView({
		image : data.image, 
		layout : {
			top : 10,
			left : 10
		}
	})
	**/
	
	self.add(title);
	self.add(category);
	
	self.add(start_date);
	self.add(end_date);
	//self.add(image);
	
	// default click handler
	self.addEventListener('click', function(e) {
		
	});
	
	
	return self;
}

module.exports = General;
