// from data.js
var UFOdata = data;

console.log(UFOdata)

// YOUR CODE HERE!

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

        // Make sure you have a column for date/time, city, state, country, shape, and comment at the very least


//reference to table body

var tbody = d3.select("tbody");


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
        // Use d3 to append 1 cell per value
        var cell = row.append("td");
        cell.text(value)
    }); 
});


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
        //clacc activity 

// Select the button
var button = d3.select("#filter-btn")


// Select form
var form = d3.select("#datetime")

// Create event handlers for clicking the button or pressing the enter key and  prevent the page from refreshing

form.on("Filter Table", () => {
    d3.event.preventDefault();
});


button.on("click", () => {
    d3.event.preventDefault();
});


