"use strict";

const fs = require('fs');

function handleError(message) {
  console.error(message);
  process.exit(1);
}

fs.readdir("files/", function(err, files) {
  if (err) {
    handleError(err);
  }

  files.forEach(function(file) {
    fs.readFile(`files/${file}`, function(err, content) {
      if (err) {
        handleError(err);
      }

      try {
        JSON.parse(content);
      } catch(err) {
        console.error("Failed to parse " + file);
        console.error(err);
        process.exit(1);
      }
    });
  });
})