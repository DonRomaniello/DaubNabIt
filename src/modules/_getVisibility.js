import { _setRGBData } from "./_setRGBData"

export const _getVisibility = (hex) => {
  const color = _setRGBData(hex)
  let rgbConversions = {}
  for (const channel in color) {
    let sKey = color[channel] / 255
    if (sKey <= .03928) {
      rgbConversions[channel] = sKey/12.92
    } else {
      rgbConversions[channel] = Math.pow(((sKey + 0.055)/1.055), 2.4)
    }
  }
  const luminance = (0.2126 * rgbConversions.Red) + (0.7152 * rgbConversions.Green) + (0.0722 * rgbConversions.Blue)
  if (luminance > .5) {
    return true
  } else {
    return false
  }
}
