
import { _setRGBData } from './_setRGBData';

const closenessCalculation = (target, match) => {
  const rDist = Math.abs(target.Red - match.rgb.Red)
  const gDist = Math.abs(target.Green - match.rgb.Green)
  const bDist = Math.abs(target.Blue - match.rgb.Blue)
  return (rDist + gDist + bDist)
}


export const _searchPaints = (color, paints) => {

  // console.log(color, paints)

  const matches = []
  paints.forEach((paint) => {
    if (!paint.rgb) {
      paint.rgb = _setRGBData(paint.hex)
    }
    const closeness = closenessCalculation(color, paint)
    matches.push({ paint, closeness })
  })
  return matches.sort((a, b) => a.closeness - b.closeness)
}
