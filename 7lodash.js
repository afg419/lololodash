var _ = require("lodash");

var worker = function(article_orders){
  return chained = _.chain(article_orders)
    .reduce(function(acc, item){
      if(acc[item.article] === undefined){
        acc[item.article] = 0
      }
      acc[item.article] += item.quantity
      return acc
    },{})
    .map(function(value, key){
      return {"article": parseInt(key), "total_orders": value}
    })
    .sortBy(function(value){
      return -value
    })
};

module.exports = worker;
//
// [ { article: 1, quantity: 4 },
//     { article: 2, quantity: 2 },
//     { article: 1, quantity: 5 } ]
//
// As you can see in this example data, "1" was ordered twice. We want
// to know the total quantities ordered for each article.
//
// Please write a function that:
//
// * Calculates the total number of orders for each article.
// * Sorts the resulting array so that the articles with the highest number of orders are on top
//
//   [ { article: 1, total_orders: 9 },
//     { article: 2, total_orders: 2 } ]
