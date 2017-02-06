function initialize(){
    cities();
};

// Function to make values and create a table
// function cities(){
//     // Declare variables
//     var city_array = [
//         "DeFuniak Springs",
//         "Dover",
//         "Shreveport",
//         "Lafayette",
//         "Biloxi",
//         "Portland"
//     ];

//     var rank_array = [
//         5,
//         2,
//         3,
//         4,
//         6,
//         1
//     ];

//     // Create table
//     var table = document.createElement("table");

//     // Create Header
//     var headerRow = document.createElement("tr");
    
//     // Create City Header
//     var cityHeader = document.createElement("th");
//     cityHeader.innerHTML = "City";
//     headerRow.appendChild(cityHeader);

//     // Create ranking Header
//     var rankHeader = document.createElement("th");
//     rankHeader.innerHTML = "Rank";
//     headerRow.appendChild(rankHeader);

//     table.appendChild(headerRow);

//     for (var i = 0; i < city_array.length; i++){
//         // Create a new row each iteration
//         var tr = document.createElement("tr");

//         // Add  data to current row for each list
//         var city = document.createElement("td");
//         city.innerHTML = city_array[i];
//         tr.appendChild(city);

//         var ranking = document.createElement("td");
//         ranking.innerHTML = rank_array[i];
//         tr.appendChild(ranking);

//         // Append the new row to the main table
//         table.appendChild(tr);
//     };

//     // Overwrite the mydiv element
//     var mydiv = document.getElementById("mydiv");
//     mydiv.appendChild(table);

// };


function cities(){
    var cityPop = [
        {
            city: 'DeFuniak Springs',
            rank: 5
        },
        {
            city: 'Dover',
            rank: 2
        },
        {
            city: 'Portland',
            rank: 1
        },
        {
            city: 'Shreveport',
            rank: 3
        },
        {
            city: 'Lafayette',
            rank: 4
        }
    ];

    $('#mydiv').append('<table>');

    $('table').append('<tr>');

    $('tr').append('<th>City</th><th>Rank</th>');

    for (var i = 0; i < cityPop.length; i++){
        var rowHTML = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].rank + '</td></tr>';
        $('table').append(rowHTML);
    };
};

$(document).ready(initialize);

// window.onload = initialize();

// on click add a new value to table
$('#mydiv').on('click', function(){
    console.log('I clicked on the table');
});

function clickon(){
    // var newRow = '<tr><td>Sante Fe</td><td>6</td></tr>'
    // $('table').append(newRow);
    console.log('I clicked on the table');
};


// $('table').off('click', clickon);

// // get the div's id value
// var theid = $('#mydiv').attr('id');
// // Add the id value to the div as text
// $('#mydiv').append(theid);
// // Add a new attribute for a class
// $('#mydiv').attr('class', 'foo');

// // Change background color of mydiv
// $('#mydiv').css('color', 'white');
// // Change the text size and color
// $('#mydiv').css({
//     'font-size': '2m',
//     'text-align': 'left'
// });

// var textColor = $('#mydiv').css('color');
// $('#mydiv').append(textColor);

// // loop through each element in script
// $('script').each(function(){
//     var source_var = $('this').attr('src');
//     $('#mydiv').append(source_var);
// });

