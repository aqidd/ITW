/**
 * @author
 */

var ListViewByCategory = function(options, data) {
	
	var self = Ti.UI.createView({
		width : options.width,
		height : options.height
	});
	
	self.titleBar = Ti.UI.createView({
		title : options.title,
		font : {
			size : 20
		},
		//color : '#FFFFFF',
		backgroundColor : '#DADADA'
	})
	
	//self.data = [];
	self.data = [];
	self.rows = [];
	
	self.widget = Ti.UI.createTableView();
	
	var Model = options.Model;
	
	if(options.comm != undefined) {
		comm.fetch({
			url : options.url,
			handler : function(response) {
				self.data = response;
				
				for(var ii = 0; ii < self.data.length; ii++) {
					self.rows.push(new Model(self.data[ii]));
				}
				self.widget.data = self.rows;
				
			}
		})
	}
	else {
		self.data = data;
		
		for(var ii = 0; ii < self.data.length; ii++) {
			self.rows.push(new Model(self.data[ii]));
		}
		self.widget.data = self.rows;
	}
	
	self.sortBy = function(index) {
		
	}
}


module.exports = ListViewByCategory;