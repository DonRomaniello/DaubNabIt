
import { _setRGBData } from './_setRGBData';

const closenessCalculation = (target, match) => {
  const rDist = Math.abs(target.Red - match.rgb.Red)
  const gDist = Math.abs(target.Green - match.rgb.Green)
  const bDist = Math.abs(target.Blue - match.rgb.Blue)
  return (rDist + gDist + bDist)
}


export const _searchPaints = (color, paints, range = 50) => {
  const matches = []
  paints.forEach((paint) => {
    paint.rgb = _setRGBData(paint.hex)
    if (paint.rgb.Red <= (color.Red + range) && paint.rgb.Red >= (color.Red - range)) {
      if (paint.rgb.Green <= (color.Green + range) && paint.rgb.Green >= (color.Green - range)) {
        if (paint.rgb.Blue <= (color.Blue + range) && paint.rgb.Blue >= (color.Blue - range)) {
          const closeness = closenessCalculation(color, paint)
          matches.push({ paint, closeness })
        }
      }
    }
  })
  return matches
}
