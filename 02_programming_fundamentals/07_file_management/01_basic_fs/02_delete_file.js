const path = require("path");
const fs = require("fs");
// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.


//check si c'est un fichier
function isFile (pathToDelete) {
  let stats = fs.statSync(pathToDelete);
  if (stats.isFile() === true ){
    return true;//    console.log("this is a file");
  } else {
    return false;
  }
}
isFile(pathToDelete);
//suppression du fichier ==> fonctionne avec node
const pathToDelete = "/Users/Damien/Workspace/folderTest/folderForMove/test1";

function deleteFile (pathToDelete) {
  fs.unlink(pathToDelete,(error) => {
    if (error) {
      console.warn(error);
    } else {
      console.log("file deleted successfully");
    }});
}
deleteFile(pathToDelete);
module.exports = deleteFile;


// Correction
const pathToDelete = "/Users/Damien/Workspace/folderTest/folderForMove/test1";

function deleteFile(pathToDelete){
  fs.unlink(pathToDelete,(error) => {
    if (error) {
      console.warn(error);
      return;
    }
    console.log("file deleted successfully");
  });
}
deleteFile(pathToDelete);
