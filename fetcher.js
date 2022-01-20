const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const localFilePath = process.argv[3];

request(URL, (error, response, body) => {

  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.log(err);
      return;
    }
  });

  fs.readFile(localFilePath, 'utf-8', (error, data) => {
    const len = data.length;
    if(!error) console.log(`Downloaded and saved ${len} bytes to ${localFilePath} `);
  });

  if (error) {
    console.log(error);
  }

});