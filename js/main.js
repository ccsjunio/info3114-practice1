// JavaScript for MLBDemo Asynch
		
		// return code values from requests
		const ISFINISHED = 4;
		const ISOK = 200;

		// AJAX asynchronous XMLHttpRequest to get the JSON
		// from the site defined by url and using the
		// callback function callback (alias for myCallBack)
		function getJSONAsync(url, callback) {
			var request = new XMLHttpRequest();
			request.onreadystatechange = function () {
				if (request.readyState === ISFINISHED && request.status === ISOK) {
					// display all the data
					document.getElementById("jsonDiv").innerHTML = request.responseText;

					// finally convert the returned data to a JavaScript object
					// use the Chrome debugger to inspect this variable
					var jsObject = JSON.parse(request.responseText);
					
					// here's some sample data from within the jsObject object
					var test = jsObject.data.games.game[0].home_team_name;
					
					// convert the jsObject object back into a different json string
					var newJSON = JSON.stringify(jsObject);
				}
			};
			// open a connection using the URL
			request.open("GET", url);
			// send the GET request
			request.send();
		}

		// onload event handler creates the URL
		// for a given year month and day
		function getBaseballDataAsynch() {
			var year = "2018";
			var month = "07";
			var day = "08";

			// build a URL as required by the MLB site
			var tempURL = "http://gd2.mlb.com/components/game/mlb/year_" + year + "/month_" + month + "/day_" + day + "/master_scoreboard.json";
			
			// this is what the actual URL will look like
			// http://gd2.mlb.com/components/game/mlb/year_2017/month_07/day_08/master_scoreboard.json

			// get the data for the specified date with an asynchronous call
			// the result will be seen above in the callBack function
			getJSONAsync(tempURL);
		}