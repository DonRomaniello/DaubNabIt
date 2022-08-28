import { _setRGBData } from './_setRGBData'

export const _getBrightness = (hex) => {

  const colorRGB = _setRGBData(hex)

  const max = Math.max(colorRGB.Red, colorRGB.Green, colorRGB.Blue)

  let brightness = max/255

  return brightness

}





// M = max{R, G, B}
// m = min{R, G, B}.

// And then V and S are defined by the equations

// V = M/255
// S = 1 - m/M     if M > 0
// S = 0              if M = 0
