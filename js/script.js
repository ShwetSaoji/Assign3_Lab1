
//Step 1

window.console.log("\n");
window.console.log("***Step 1***");


var a=["ZNMD","Friends","American Pie","Grown ups","Kids"];
window.console.log(a[1]);

//Step 2

window.console.log("\n");
window.console.log("***Step 2***");


var movies = new Array(5);
movies[0]="ZNMD";
movies[1]="Friends";
movies[2]="American Pie";
movies[3]="Grown ups";
movies[4]="Kids";
window.console.log(movies[0]);

//Step 3

window.console.log("\n");
window.console.log("***Step 3***");


movies.splice(2, 0, "Andhadhun");
window.console.log(movies.length);

//Step 4

window.console.log("\n");
window.console.log("***Step 4***");


var movies_1 = [];
movies_1[0]="Harry Potter";
movies_1[1]="Friends";
movies_1[2]="American Pie";
movies_1[3]="Grown ups";
movies_1[4]="Kids";

delete movies_1[0];
window.console.log(movies_1);

//Step 5

window.console.log("\n");
window.console.log("***Step 5***");


var movies_2 = [];
movies_2[0]="Harry Potter";
movies_2[1]="Friends";
movies_2[2]="American Pie";
movies_2[3]="Grown ups";
movies_2[4]="Kids";
movies_2[5]="New Girl";
movies_2[6]="troy";
for (var i in movies_2) {
  window.console.log(movies_2[i]);
}

//Step 6
window.console.log("\n");
window.console.log("*** Step 6 ***");

for(var i of movies_2) {
  window.console.log(i);
}

//Step 7 

window.console.log("\n");
window.console.log("*** Step 7 ***");

movies_2.sort();
for(var i of movies_2) {
  window.console.log(i);
}

//Step 8 

window.console.log("\n");
window.console.log("*** Step 8 ***");


var movies_2 = ["Harry Potter","Friends","American Pie","Grown ups","Kids","Titanic","Andhadhun"];
var leastFavMovies = ["HIT","Agneepath ","Ganesha"];

window.console.log("Movies I like:");

window.console.log("\n");
for(var i of movies_2) {
  window.console.log(i);
}

window.console.log("\n");
window.console.log("Movies I regret watching:");

window.console.log("\n");
for(var i of leastFavMovies) {
  window.console.log(i);
}

//Step 9

window.console.log("\n");
window.console.log("*** Step 9 ***");


var allMovies = movies_2.concat(leastFavMovies);
allMovies.sort().reverse();
for(var i of allMovies) {
  window.console.log(i);
}

//Step 10

window.console.log("\n");
window.console.log("*** Step 10 ***");

var lastmovie = allMovies.slice(-1)[0];
window.console.log(lastmovie);

//Step 11

window.console.log("\n");
window.console.log("*** Step 11 ***");


window.console.log(allMovies.shift());

//Step 12

window.console.log("\n");
window.console.log("*** Step 12 ***");



var movies_2 = ["Harry Potter","Friends","American Pie","Grown ups","Kids","Titanic","Tarzan"];
var leastFavMovies = ["HIT","Agneepath ","Ganesha"];
var allMovies = movies_2.concat(leastFavMovies);
allMovies.sort().reverse();
var leastFavMoviesindices = [];

allMovies.forEach((movie, index) => {
  if (leastFavMovies.includes(movie)) {
    leastFavMoviesindices.push(index); }
});

var goodmovies = ["La Dolce Vita","Seven Samurai","The Godfather"]

leastFavMoviesindices.forEach((index) => {
    allMovies[index] = goodmovies.shift();
});

for (var index = 0; index < allMovies.length; index++) {
    "use strict";
    window.console.log(allMovies[index] );
}
window.console.log("\n");


//Step 13

window.console.log("\n");
window.console.log("*** Step 13 ***");


var movies3 = [["Harry Potter", 1], ["Friends", 2], ["Grown ups", 3], ["Kids", 4], ["Tarzan", 5]];

var movieNames = movies3.filter(function(movie) {
  return typeof movie[0] === "string";
});

window.console.log(movieNames.map(movie => movie[0]));


//Step 14

window.console.log("\n");
window.console.log("*** Step 14 ***");


var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
  window.console.log("Employees: ");
  window.console.log("\n"); 
  employees.forEach(function(employee) {
    window.console.log(employee);
  });
};

showEmployee(employees);

//Step 15

window.console.log("\n");
window.console.log("*** Step 15 ***");


var values = [58, '', 'abcd', true, null, false, 0];

var filterValues = function(values){
    return values.filter(function(val) {
  return val !== false && val !== null && val !== 0  && val !== "";
});
};

window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//Step 16

window.console.log("\n");
window.console.log("*** Step 16 ***");



var RandomNumber = function(val) {
  return val[Math.floor(Math.random() * val.length)];
};
var nums = [1, 20, 34, 43, 52, 68, 75, 89, 90, 101];
window.console.log(RandomNumber(nums));

//Step 17

window.console.log("\n");
window.console.log("*** Step 17 ***");




var LargestNumber = function(val){
    return Math.max(...val);
}

var arr = [789 , 193, 200 , 67 , 88900 ,00 , 76 ];
window.console.log(LargestNumber(arr));












