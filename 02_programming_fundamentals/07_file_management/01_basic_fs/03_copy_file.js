// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.

// destination.txt will be created or overwritten by default.
const path = require("path");
const fs = require("fs");

const originPath = "/Users/Damien/Workspace/folderTest/test";
const destPath = "/Users/Damien/Workspace/folderTest/folderForMove/testZZ";

function copyPaste(originPath,destPath) {
  fs.copyFile(originPath,destPath, (error) => {
    if (error) {
      console.warn(error);
    } else {
      console.log("file was copied");
    }
  });
}
copyPaste(originPath,destPath);

module.exports = copyPaste;
