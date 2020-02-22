// Practice 1 code for INFO3114
		
// return code values from requests
const ISFINISHED = 4;
const ISOK = 200;

// set up global variables
let beginningDate = new Date(2019,6,12);
console.log("beginning date first instantiated ", beginningDate);

let test = new GameDates();
console.log("test1 = ", test);

test = new GameDates();
console.log("test2 = ", test);

test = new GameDates();
console.log("test3 = ", test);

test = new GameDates();
console.log("test4 = ", test);

test = new GameDates();
console.log("test5 = ", test);

test = new GameDates();
console.log("test6 = ", test);


function getMLBDates(target){
    console.log("target = ",target);
    console.log("handling", target.getAttribute("type") + " " + target.id);
}


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

function GameDates(gameDate = null){
   
    this.gameYear;
    this.gameMonth;
    this.gameDay;

    if(gameDate===null){
        gameDate=beginningDate;
        this.gameYear = gameDate.getFullYear();
        this.gameMonth = (gameDate.getMonth() + 1 < 10) ? "0" + (gameDate.getMonth() + 1) : String(gameDate.getMonth() + 1);
        this.gameDay = (gameDate.getDate() < 10) ? "0" + gameDate.getDate() : String(gameDate.getDate());
    }

    function returnDates(){
        gameDate.setDate(gameDate.getDate()+1);
        console.log("===============================================");
        console.log("gamedate inside returnDates function:",gameDate);
        let response = {
            gameYear : String(this.gameYear),
            gameMonth : (+this.gameMonth + 1) < 10 ? "0" + (+this.gameMonth + 1) : String(+this.gameMonth + 1),
            gameDay : (this.gameDay) < 10 ? "0" + (this.gameDay) : String(this.gameDay)
        };
    }

    return returnDates();
    
}