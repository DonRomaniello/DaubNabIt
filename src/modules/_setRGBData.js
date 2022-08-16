export const _setRGBData = (hex) => {
  const rHex = hex.slice(1,3)
  const gHex = hex.slice(3,5)
  const bHex = hex.slice(5)

  const Red = parseInt(rHex, 16)
  const Green = parseInt(gHex, 16)
  const Blue = parseInt(bHex, 16)

  return { Red, Green, Blue }
}
