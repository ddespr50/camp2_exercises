const path = require("path");
const fs = require("fs");

// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"


//1ere possibilité
function pwd () {
  return (path.resolve());
}
console.log(pwd());
module.exports = pwd;



//2eme possibilité
function pwd () {
  return (path.resolve("."));
}
pwd();
module.exports = pwd;
