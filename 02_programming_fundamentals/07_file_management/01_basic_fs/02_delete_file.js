const path = require("path");
const fs = require("fs");
// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const pathToDelete = "/Users/Damien/Workspace/folderTest/test";


const file = true

function isFile () => {
  fs.isFile()
}






/*function deleteFile (pathToDelete) {
  fs.unlinkSync(pathToDelete,(error) => {
    if (error) {
      console.warn(error);
    } else {
      console.log("file deleted successfully");
    }});
}
deleteFile(pathToDelete);

module.exports = deleteFile;
