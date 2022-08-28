import { _setRGBData } from './_setRGBData'

export const _getSaturation = (hex) => {

  const colorRGB = _setRGBData(hex)

  const max = Math.max(colorRGB.Red, colorRGB.Green, colorRGB.Blue)
  const min = Math.min(colorRGB.Red, colorRGB.Green, colorRGB.Blue)

  let saturation;
  if (max === 0){
    saturation = 0;
  } else {
    saturation = (1 - min/max)
  }
  return saturation

}
