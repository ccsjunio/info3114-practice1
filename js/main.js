// Practice 1 code for INFO3114
		
// return code values from requests
const ISFINISHED = 4;
const ISOK = 200;

// set up global variables
let beginningDate = new Date(2019,6,12);
console.log("beginning date first instantiated ", beginningDate);

// handle the start button by requesting new Dates and then
// requesting new Games
function getMLBDates(target){
    console.log("target = ",target);
    console.log("handling", target.getAttribute("type") + " " + target.id);

    // set the number of interactions
    let interactions = 5;
    // call the function to request a new date and games
    requestDate();

    function requestDate(){
        //first test interactions counter and then decrement
        if(interactions--===0) return false;
        //request game data for a new date
        getBaseballDataAsynch(new GameDates());
        // set a timeout that will execute the same function iteractively
        window.setTimeout(requestDate, 3000);
    }//requestDate()
}//getMLBDates(target)

// onload event handler creates the URL
// for a given year month and day
function getBaseballDataAsynch(gameDate) {
    
    if(gameDate===undefined || gameDate===null) return false;

    let year = gameDate.gameYear;
    let month = gameDate.gameMonth;
    let day = gameDate.gameDay;

    // build a URL as required by the MLB site
    var tempURL = "http://gd2.mlb.com/components/game/mlb/year_" + year + "/month_" + month + "/day_" + day + "/master_scoreboard.json";
    
    // this is what the actual URL will look like
    // http://gd2.mlb.com/components/game/mlb/year_2017/month_07/day_08/master_scoreboard.json

    // get the data for the specified date with an asynchronous call
    // the result will be seen above in the callBack function
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if (request.readyState === ISFINISHED && request.status === ISOK) {
            // finally convert the returned data to a JavaScript object
            // use the Chrome debugger to inspect this variable
            var jsObject = JSON.parse(request.responseText);
            
            // convert the jsObject object back into a different json string
            var newJSON = JSON.stringify(jsObject);

            // display all the data
            document.getElementById("jsonDiv").innerHTML = newJSON;
        }
    };
    // open a connection using the URL
    request.open("GET", tempURL);
    // send the GET request
    request.send();;

}

// generate game dates
function GameDates(gameDate = null){
   
    this.gameYear;
    this.gameMonth;
    this.gameDay;

    // gameDate will be null in the first interation
    // then it assumes the beginning date
    if(gameDate===null){
        gameDate=beginningDate;
        this.gameYear = gameDate.getFullYear();
        this.gameMonth = (gameDate.getMonth() + 1 < 10) ? "0" + (gameDate.getMonth() + 1) : String(gameDate.getMonth() + 1);
        this.gameDay = (gameDate.getDate() < 10) ? "0" + gameDate.getDate() : String(gameDate.getDate());
    }

    // function returned by the GameDates function
    // it only increments the date in the gameDate object
    // it uses the closure feature from JS
    // gameDate is first defined and then keeps its instance for the
    // next interactions
    function returnDates(){ 
        console.log("===============================================");
        console.log("gamedate inside returnDates function:",gameDate);
        gameDate.setDate(gameDate.getDate()+1);
    }//returnDates()

    return returnDates();
    
}