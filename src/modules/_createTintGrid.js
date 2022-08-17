export const _createTintGrid = (range) => {
  let grid = []
  for (let i = -3; i < 4; i++){
    let xTint = {
      Red : (Math.abs(i) === 3) ? range * Math.sign(i) : 0,
      Green:  (Math.abs(i) === 2) ? range * Math.sign(i) : 0,
      Blue:  (Math.abs(i) === 1) ? range * Math.sign(i) : 0,
    }
    for (let j = -3; j < 4; j++){
      let yTint = {
        Red : (Math.abs(j) === 3) ? range * Math.sign(j) : 0,
        Green:  (Math.abs(j) === 2) ? range * Math.sign(j) : 0,
        Blue:  (Math.abs(j) === 1) ? range * Math.sign(j) : 0,
      }
      let tint = {
        Red : xTint.Red + yTint.Red,
        Green : xTint.Green + yTint.Green,
        Blue: xTint.Blue + yTint.Blue,
      }
      grid.push(tint)
    }
  }
  return grid
}

