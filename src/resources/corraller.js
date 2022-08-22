const fs = require('fs');

const path = require('path')

const { group } = require('console');

let testFolder = path.resolve(process.cwd(), './json/');

let fileList = fs.readdirSync(testFolder);

let masterPaints = {};

const _makeHex = (rgbObject) => {

  const bandPass = (raw) => {
    if (raw > 255) {
      return 255
    } else if (raw < 0) {
      return 0
    } else {
      return raw
    }
  }

  const r = bandPass(rgbObject.Red).toString(16)
  const g = bandPass(rgbObject.Green).toString(16)
  const b = bandPass(rgbObject.Blue).toString(16)

  const color = '#' + r + g + b
  return color;

}



fileList.forEach((fileName) => {
  fs.readFile((testFolder + '/' + fileName), (err, data) => {
    if (err) {
      console.error(err);
      return;
    }


    let keyForPaints = fileName.slice(0, -5)

    let paints = JSON.parse(data)


    // "hex": "rgb(243, 152, 175)"

    // The Valspar Contingency...
    if (paints[0].hex.slice(0,3) == 'rgb'){

      paints.forEach((paint) => {

        const cleanedRGB = paint.hex.slice(4, -1).split(',')



        const colorObject = {
          Red: Number(cleanedRGB[0]),
          Green: Number(cleanedRGB[1].slice(1)),
          Blue: Number(cleanedRGB[2].slice(1)),
        }
        paint.hex = _makeHex(colorObject)
        console.log(paint)
      })




    }

    masterPaints[keyForPaints] = paints

    // console.log(masterPaints[keyForPaints])
    // console.log(Object.keys(masterPaints))
    // console.log(fileName.slice(0, -5))
  });
})








// console.log(fileList)
