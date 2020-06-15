const readline = require('readline');
const fs = require('fs');
const { rejects } = require('assert');

// const file = readlineSync.question("Type your file name: ");
// fs.readFile(file, 'utf-8', (err, data) => {
//   if (err) return console.error('File not found');
//   console.log(`The file content is: "${data}" and has ${Buffer.byteLength(data)} bytes`);
// });

// const file = readlineSync.question("Type your file name: ");
// function showFileContentAndBytes(fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, content) => {
//       if (err) return reject(err);
//       resolve(content);
//     });
//   });
// }

// showFileContentAndBytes(file)
//   .then((content) => console.log(`The file content is: "${content}" and has ${Buffer.byteLength(content)} bytes`))
//   .catch(() => console.error('File not found'));

async function showFileContentAndBytes() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Type your file name: ", (file) => {
    fs.readFile(file, (err, content) => {
      if (err) return console.error('File not found');
      console.log(`The file content is: "${content}" and has ${Buffer.byteLength(content)} bytes`);
    })
    rl.close();
  });
}

showFileContentAndBytes();
