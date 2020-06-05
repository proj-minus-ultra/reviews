//how i used ES6 import syntax with node
//https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/
require("@babel/register")({
  presets: ["@babel/preset-env"]
});


module.exports = require('./index.js');