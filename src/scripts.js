require('./module1.js');
require('./module2.js');

var messages = require('./messages.js');
var app = document.getElementById("app");
app.innerHTML = "<p>" + messages.hi + " " + messages.event + "</p>";

if(module.hot) {
    module.hot.accept();
}
