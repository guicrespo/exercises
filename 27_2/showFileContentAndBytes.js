const readlineSync = require('readline-sync');
const fs = require('fs');

const file = readlineSync.question("Type your file name: ");
fs.readFile(file, 'utf-8', (err, data) => {
  if (err) return console.error('File not found');
  console.log(`The file content is: "${data}" and has ${Buffer.byteLength(data)} bytes`);
});

// function showFileContentAndBytes() {
// }
