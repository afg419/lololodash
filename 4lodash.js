// include the Lo-Dash library
var _ = require("lodash");

var worker = function(towns) {
  results = {hot: [], warm: []};
  _.forEach(towns, function(town_temps, key){
    if(
      _.every(town_temps, function(temp){
        return temp > 19;
      })
      ){
        results.hot.push(key)
        debugger
      }else if (
        _.some(town_temps, function(temp){
          return temp > 19;
        })
      ){
        results.warm.push(key)
      }
  })
  return results
};

// export the worker function as a nodejs module
module.exports = worker;
