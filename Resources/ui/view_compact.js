/**
 * @author
 */

var CompactView = function(options, data) {
	var self = this;
	
	self.widget = Ti.UI.createView({
		width : options.width,
		height : options.height,
		top : options.top-30,
		left : options.left
	})
	
	
	var titleContainer = Ti.UI.createView({
		backgroundColor : '#DADADA',
		top : 0,
		width : options.width,
		height : 30,
		left : 0
	});
	
	var titleBar = Ti.UI.createLabel({
		text : options.title,
		font : {
			fontSize : 14,
			verticalAlign : 'middle',
			textAlign : 'left',
		},
		color : 'black',
		left : 10
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
					height : 200,
					top : 30,
					left : 0
					
				}, self.data);	
				
				self.widget.add(self.model);		
	
			}
		});
	
	}
	
	self.widget.add(titleContainer);
}

module.exports = CompactView;
