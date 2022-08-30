// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);


//Plotly.newPlot("plotArea", [{x: [5, 10, 15], y: [10, 20, 30]}]);

// let trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  }];
//  let layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// Plotly.newPlot("plotArea1", trace, layout);



// let trace = [{
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// }];

// let layout = {
//     title: "Popular Non-Alcoholic Drinks",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "Percent of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", trace, layout);


var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);


var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num + 5;
});
console.log(doubled);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

numbers = [13,22, 36, 54, 55];
let evenNumbers = numbers.filter(anyvarname => anyvarname % 2 == 0);
console.log(evenNumbers);

numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);
smaller = numbers.filter(smallNum => smallNum <3);
console.log(smaller);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var species = words.filter(animals => animals.startsWith("s"));
console.log(species);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);
console.log(words.slice(0,3));

