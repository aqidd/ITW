/**
 * @author
 */

var ListViewByCategory = function(options, data) {
	
	var self = this;
	
	self.widget = Ti.UI.createView({
		width : options.width,
		height : options.height,
		top : options.layout.top,
		left : options.layout.left
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
			size : 20,
			verticalAlign : 'middle',
			textAlign : 'left'
		},
		color : 'black'
	})
	
	titleContainer.add(titleBar);
	
	self.widget.add(titleContainer);
	
	//self.data = [];
	self.data = [];
	self.rows = [];
	

	/**
	 
	 self.listView = Ti.UI.createTableView();
	
	var Model = options.model;
	
	if(options.comm != undefined) {
		
		comm = options.comm;
		
		comm.fetch({
			url : options.url,
			handler : function(response) {
				
				
				self.data = response;
				
				
				
				for(var ii = 0; ii < self.data.length; ii++) {
					self.rows.push(new Model(self.data[ii]));
				}
				
				
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
				
				self.listView.data = self.rows;
				
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
	 
	 
	 */
	
}


module.exports = ListViewByCategory;