// Assign the data from `data.js` to a descriptive variable
var ufosightings = data;
//append data to table
tbody=d3.select("tbody")
ufosightings.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
//initialize variables for submit buttons
var datetimeSubmitButton = d3.select("#filter-btn-datetime");
var citySubmitButton=d3.select("#filter-btn-city");
var stateSubmitButton=d3.select("#filter-btn-state");
var countrySubmitButton=d3.select("#filter-btn-country");
var shapeSubmitButton=d3.select("#filter-btn-shape");

datetimeSubmitButton.on("click", function() {
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var datetimefiltered = ufosightings.filter(sightings => sightings.datetime === inputValue);
    console.log(datetimefiltered);
    d3.select("tbody").html("");
    datetimefiltered.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    });
citySubmitButton.on("click", function() {
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#city");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var cityfiltered = ufosightings.filter(sightings => sightings.city === inputValue);
    d3.select("tbody").html("");
    cityfiltered.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    });
stateSubmitButton.on("click", function() {
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#state");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var statefiltered = ufosightings.filter(sightings => sightings.state === inputValue);
    d3.select("tbody").html("");
    statefiltered.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    });
countrySubmitButton.on("click", function() {
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#country");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var countryfiltered = ufosightings.filter(sightings => sightings.country === inputValue);
    d3.select("tbody").html("");
    countryfiltered.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    });
shapeSubmitButton.on("click", function() {
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#shape");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var shapefiltered = ufosightings.filter(sightings => sightings.shape === inputValue);
    d3.select("tbody").html("");
    shapefiltered.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});