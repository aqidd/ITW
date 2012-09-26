var Comm = function (options) {
	//var intent = Ti.Android.currentActivity.getIntent();
	var self = this;
	self.options = options;
	
	var httpClient = Ti.Network.createHTTPClient();
	
	self.fetch = function(options) {
		if(options.url != undefined) {
			if(options.method == undefined) options.method = 'GET';
		}
		
		httpClient.open(options.method, options.url);
		
		// the default 
		httpClient.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
		
		
		if(options.headers != undefined) {
			
			for(var ii in options.headers) {
				if(ii != undefined)
					httpClient.setRequestHeader(ii, options.headers[ii])
			}
			
		}
		
		httpClient.onload = function() {
			if(this.status == '200') {
				if(options.handler != undefined)
					options.handler(JSON.parse(httpClient.responseText));
			}
		}
		
		if(options.params != undefined)
			httpClient.send(options.params);
		else
			httpClient.send();
	}
	
	if(options != undefined) {
		var fetchTimeOut = setInterval(function() {
			if(httpClient.readyState == 4) {
				
				/**
				 * Sample fetch data (competition)
				 */
				self.fetch({
					url : 'http://localhost',
					params : {
						'cat_id' : options.navigationBar.current_tab_index
					},
					handler : function(response) {
						console.log(response);
					}
				});
			}
			
		}, 30000);
	}
}

module.exports = Comm;
