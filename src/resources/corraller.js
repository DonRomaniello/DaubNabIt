const path = require('path')
const fs = require('fs');

let testFolder = path.resolve(process.cwd(), './json/');

let fileList = fs.readdirSync(testFolder)

let masterPaints = {}

fileList.forEach((fileName) => {
  fs.readFile((testFolder + '/' + fileName), (err, data) => {
    if (err) {
      console.error(err);
      return;
    }


    let keyForPaints = fileName.slice(0, -5)

    console.log(keyForPaints)

    masterPaints[keyForPaints] = JSON.parse(data)

    console.log(masterPaints)
    // console.log(fileName.slice(0, -5))
  });
})








// console.log(fileList)
