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


// Correction avec return
// 1-read sourcefilename
// 2-obtain content
// 3-write new file with content
const fs = require("fs");


function copyPaste(sourceFileName,targetFileName){
  fs.readfile(sourceFileName,(error, data ) => {
    if (error){
      console.warn(error);
      return
    }
    fs.writeFile(targetFileName, data, error => {
      if (error){
        console.warn(error);
        return
      }
    });
  });
}

copyPaste(sourceFileName,targetFileName);
module.exports = copyPaste;//pour les tests

//2e possibilité avec if/else
const fs = require("fs");


function copyPaste(sourceFileName,targetFileName){
  fs.readfile(sourceFileName,(error, data ) => {
    if (error){
      console.warn(error);
    } else {
      fs.writeFile(targetFileName, data, error => {
        if (error){
          console.warn(error);
          return
        }
      });
    }
  });
}

copyPaste(sourceFileName,targetFileName);
module.exports = copyPaste;//pour les tests
