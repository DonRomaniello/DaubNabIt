
import { _setRGBData } from './_setRGBData';

const closenessCalculation = (target, match) => {
  const rDist = Math.abs(target.Red - match.rgb.Red)
  const gDist = Math.abs(target.Green - match.rgb.Green)
  const bDist = Math.abs(target.Blue - match.rgb.Blue)
  return (rDist + gDist + bDist)
}


export const _searchPaints = (color, paints) => {
  const matches = []
  paints.forEach((paint) => {
    paint.rgb = _setRGBData(paint.hex)
    const closeness = closenessCalculation(color, paint)
    matches.push({ paint, closeness })
    console.log('uns')
  })
  return matches.sort((a, b) => a.closeness - b.closeness)
}
