/**
 * @author
 */

var CompactView = function(options, data) {
	var self = this;
	
	self.widget = Ti.UI.createView({
		width : options.width,
		height : options.height,
		top : options.layout.top,
		left : options.layout.left
	})
	
	
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
	
	
	if(options.comm != undefined) {
		var comm = options.comm;
		
		comm.fetch({
			url : options.url,
			handler : function (response) {
				
				// seharusnya ini ada di web servicenya
				// atau emang musti bikin db di mobile devicenya
				self.data = response[0];
				
				Ti.API.info(JSON.stringify(self.data));
				
				var Model = options.model;
				
				self.model = new Model({
					functionView : Ti.UI.createView,
					width : options.width,
					height : options.height,
					layout : {
						top : 0,
						left : 0
					}
					
				}, self.data);	
				
				self.widget.add(self.model);		
				
			}
		});
	
	}
	
	self.widget.add(titleContainer);
}

module.exports = CompactView;
