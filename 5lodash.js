var _ = require("lodash");

var worker = function(words) {
  return mod_words = _.chain(words)
    .map(function(word){
      return word.toUpperCase() + "CHAINED"
    })
    .sortBy(function(word){return word})
};

// export the worker function as a nodejs module
module.exports = worker;




// [
//     { username: "tim", comment: "you are doing a great job!" },
//     { username: "tim", comment: "when you have new workshoppers?" },
//     { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
//     { username: "max", comment: "where have you been on friday? we missed you!" },
//     { username: "max", comment: "You don't answer anymore - why?" },
//     { username: "cat_lover", comment: "MORE cats!!!" },
//     { username: "max", comment: "i really love your site" }
// ]
//
// I want to know how to post the most comments without repeating the same user,
// so please write a function that:
//
// * Counts the comments by `username`.
// * Sorts the return array by the total comment count of each user.
//
// [ { username: "foo",    comment_count: 9 },
//   { username: "foobar", comment_count: 2 } ]
