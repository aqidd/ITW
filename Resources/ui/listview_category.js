/**
 * @author
 */

var ListViewByCategory = function(options, data) {
	
	var self = this;
	
	self.widget = Ti.UI.createView({
		width : options.width,
		height : options.height,
		top : options.top,
		left : options.left
	});
	
	var titleContainer = Ti.UI.createView({
		backgroundColor : '#DADADA',
		top : 10,
		width : self.widget.width,
		height : 30,
		left : 0
	});
	
	var titleBar = Ti.UI.createLabel({
		text : options.title,
		font : {
			fontSize : 14,
			verticalAlign : 'middle',
			textAlign : 'left'
		},
		color : 'black',
		left : 10
	})
	
	titleContainer.add(titleBar);
	
	self.widget.add(titleContainer);
	
	//self.data = [];
	self.data = [];
	self.rows = [];
	
	self.listView = Ti.UI.createTableView({
		top : 40,
		height : '100%'
	});
	
	
	var Model = options.model;
	
	if(options.comm != undefined) {
		
		comm = options.comm;
		
		comm.fetch({
			url : options.url,
			handler : function(response) {
				
				self.data = response;
				
				if(options.sortBy != undefined) {
					if(options.sortDirection == undefined) {
						options.sortDirection = 'Descending';
					}
					
					// sort the data
					self.data.sort(function(lhs, rhs){
						if(options.sortDirection == 'Descending')
							return lhs[options.sortBy] - rhs[options.sortBy];
						else
							return rhs[options.sortBy] - lhs[options.sortBy];
					});
				} 
				
				for(var ii = 0; ii < self.data.length; ii++) {
					
					self.listView.appendRow(new Model({
						width : options.width,
						height : 90,
						top : 0,
						left : 0
						
					}, self.data[ii]));
					
					//Ti.API.info("Debug : " + self.rows[ii]);
				}
				
				
				
			
			}
		})
		
	}
	else {
		self.data = data;
		
		if(options.sortBy != undefined) {
			if(options.sortDirection == undefined) {
				options.sortDirection = 'Descending';
			}
			
			// sort the data
			self.data.sort(function(lhs, rhs){
				if(options.sortDirection == 'Descending')
					return lhs[options.sortBy] - rhs[options.sortBy];
				else
					return rhs[options.sortBy] - lhs[options.sortBy];
			});
		} 
		
		for(var ii = 0; ii < self.data.length; ii++) {
			self.rows.push(new Model(self.data[ii]));
		}
		self.listView.data = self.rows;
	}
	
	self.sortBy = function(options) {
		
	}
	
	self.widget.add(self.listView);
	
	
	return self;
}


module.exports = ListViewByCategory;