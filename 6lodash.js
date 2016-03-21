var _ = require("lodash");

var worker = function(user_comments) {
  result = _.chain(user_comments)
    .groupBy("username")
    .map(function(chunk, name){
      return {"username": name, "comment_count": _.size(chunk)}
    })
    .sortBy(function(user_comment_count){
    return -1*user_comment_count.comment_count
    })
  return result
};

module.exports = worker;
