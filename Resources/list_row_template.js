Category = ["Art", "Business"];

var CompetitionListTemplate = function(  data ) {
	
	this = Ti.UI.createView({
		width : '100%',
		height : '100%',
		
	})
	
	var title = Ti.UI.createLabel({
		font : {
			size : 20
		},
		text : data.title,
		layout : {
			top : 10,
			left : 50
		}
	});
	
	var category = Ti.UI.createLabel({
		font : {
			size : 14
		},
		layout : {
			top : 20,
			left : 50
		},
		text : "Category : " + Category[data.catid]
	});
	
	var image = Ti.UI.createImageView({
		image : data.image,
		layout : {
			top : 20,
			left : 5
		},
		width : 40,
		height : 40
	});
	
	var startDate = Ti.UI.createLabel({
		font : {
			size : 14
		},
		layout : {
			top : 40,
			left : 50
		},
		text : "Start : " + data.date.start
	})
	
	
	var endDate = Ti.UI.createLabel({
		font : {
			size : 14
		},
		layout : {
			top : 50,
			left : 50
		},
		text : "End : " + data.date.end
	})
	
	
}

