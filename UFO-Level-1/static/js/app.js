// from data.js
var UFOdata = data;

console.log(UFOdata)

// YOUR CODE HERE!

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

        // Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.


//reference to table body

var  tbody = d3.select("tbody");


//loop through and log each data object
UFOdata.forEach(encounter => {
    console.log(encounter);
});

//add blank table row
UFOdata.forEach(encounter => {
    console.log(encounter);
    var row = tbody.append("tr");

//add cells to tr
    Object.entries(encounter).forEach(([key, value]) => {
        console.log(key, value)
    }); 
});



