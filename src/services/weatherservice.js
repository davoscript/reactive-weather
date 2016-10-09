var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';

// Add Your API Key
var apiKey = 'c403f9ef8fb5f14fc34140570cb06716';

var weatherService = {
	get: function(url) {
		return fetch(baseUrl + url + '&APPID=' + apiKey)
		.then(function(response) {
			return response.json();
		});
	}
}

module.exports = weatherService;
