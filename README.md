# info3114-practice1

Requirements:
1. Create a constructor function called GameDates that will be used to create new objects for a sequence of dates starting from a beginning date. This beginning date should be a global variable and a valid date type with a value of “2019/07/12”
2. The constructor function should return a date object with the following format:
{
gameYear: “2019”,
gameMonth: “07”,
gameDay: “12”
}
3. Each time you request a new date object, your constructor function will determine the next date in sequence (you’ll need to remember the last date you received – if any). Hint: think prototype property.
4. Add a button to your web page with a value of “Start” and an event handler called getMLBDates.
5. Within the “getMLBDates” function, use “setTimeout” and a recursive loop to request a new date every three seconds for a total of five days. You will need to ensure that your recursive loop will only iterate 5 times.
6. Each time you ask for a date, send the resulting date object to a function that will then request the MLB JSON data for the date specified. Make sure that all the code required to issue and process the JSON request is in this single function.
7. Each time you receive the JSON, dump it out to a <div> container on your web page.
