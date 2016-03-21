var _ = require("lodash");

  var worker = function(obj) {
    debugger
    return _.template('Hello <%=name%> (logins: <%= login_count %>)')({name: obj.name, login_count: _.size(obj.login)})
  };

module.exports = worker;
