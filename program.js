 // include the Lo-Dash library
var _ = require('lodash');

  var worker = function(items) {
    // _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
    return _.sortBy(items, function(item){
      return -item.quantity;
    });
  };

  // export the worker function as a nodejs module
  module.exports = worker;
