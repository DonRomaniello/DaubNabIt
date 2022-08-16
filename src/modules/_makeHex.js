export const _makeHex = (rgbObject) => {

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
