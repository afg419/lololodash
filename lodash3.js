// include the Lo-Dash library
var _ = require('lodash');

 var worker = function(cities) {
  //  var final_cities = cities
   return _.forEach(cities, function(city){
     pop = city.population
     if (pop < 0.5){
       var size = "small"
     }else if (pop < 1.0){
       var size = "med"
     } else {
       var size = "big"
     }
     return city.size = size
   })
 };

 // export the worker function as a nodejs module
 module.exports = worker;
