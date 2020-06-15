const readlineSync = require('readline-sync');
const fs = require('fs');

// const file = readlineSync.question("Type your file name: ");
// fs.readFile(file, 'utf-8', (err, data) => {
//   if (err) return console.error('File not found');
//   console.log(`The file content is: "${data}" and has ${Buffer.byteLength(data)} bytes`);
// });

const file = readlineSync.question("Type your file name: ");
function showFileContentAndBytes(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

showFileContentAndBytes(file)
  .then((content) => console.log(`The file content is: "${content}" and has ${Buffer.byteLength(content)} bytes`))
  .catch(() => console.error('File not found'));

//   async function showFileContentAndBytes() {
//     const file = await readlineSync.question("Type your file name: ");
//     fs.readFile(file, (err, content) => {
//       if (err) return console.error('File not found');
//       console.log(`The file content is: "${data}" and has ${Buffer.byteLength(data)} bytes`);
//     })
//   }
