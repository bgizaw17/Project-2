// from data.js
var tableData = data;

// Select table
var tbody = d3.select("tbody");

// Loop over the array
tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Shapes to select from (dropdown menu)
var data = ["BOTH", "Female", "Male"];

// get content from dropdown menu
var select = d3.select('#shape')
    .append('select')
    .attr('class','select')
    .on('change',onchange);

// This creates the dropdown menu
var options = select
    .selectAll('option')
    .data(data).enter()
    .append('option')
    .text(function (d) { return d; });



button.on("click", function() {

    // Prevent the page from refreshing
    // when using a button with type=submit, it will try to submit the form and automatically reset it
    // in this scenario, we could prevent this by setting type=button, or by using the line below.
    d3.event.preventDefault();

    // shape of the UFO from the dropdown menu
    shapeValue = d3.select('select').property('value')
    console.log(shapeValue);

    // loop through array to find matching data
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");


        {
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        }
    });

});


function onchange() {
    selectValue = d3.select('select').property('value')
};
