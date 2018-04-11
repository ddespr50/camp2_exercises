// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)


const fs = require("fs");


const sourceFilename = "/Users/Damien/Workspace/folderTest/test";
const targetFilename = "/Users/Damien/Workspace/folderTest/folderForMove/test4";

function cutPaste(sourceFilename,targetFilename) {
  fs.copyFile(sourceFilename,targetFilename, (error) => {
    if (error) {
      console.warn(error);
    } else {
      console.log("file was copied");
    }
  });
}
cutPaste();
