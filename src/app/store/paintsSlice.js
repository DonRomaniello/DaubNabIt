import { createSlice } from '@reduxjs/toolkit';

import { makeRGBObject } from '../../modules/makeRGBObject';

const paints = require('../../resources/json/behr.json');

const _sortPaints = (paintA, paintB) => {
  if (paintA.rgb.Red > paintB.rgb.Red) {
    return -1;
  } else if (paintA.rgb.Red == paintB.rgb.Red) {
    if (paintA.rgb.Green > paintB.rgb.Green) {
      return -1;
    } else if (paintA.rgb.Green == paintB.rgb.Green) {
      if (paintA.rgb.Blue == paintB.rgb.Blue) {
        return 0;
      }
    } else {
      return 1;
    }
  } else {
    return 1
  }
}

const initialState = {
  paints,
  swatchMatches: [],
}

// const _getMatches = (colors) => {






// }



export const paintsSlice = createSlice({
  name: 'paints',
  initialState,
  reducers: {
    setRGBs: (state) => {
      state.paints = state.paints.map((paint) => { return { ...paint, rgb : makeRGBObject(paint.hex)}});
    },
    sortPaints: (state) => {
      state.paints = state.paints.sort(_sortPaints)
    }
    // getMatches: (state, action) => {
    //   state.swatchMatches = action.payload
    // },
  }
});

export const { setRGBs, sortPaints } = paintsSlice.actions;

export const selectPaints = (state) => state.paints.paints;

export const selectSwatchMatches = (state) => state.paints.swatchMatches;

export default paintsSlice.reducer;
