import { createSlice } from '@reduxjs/toolkit';

import { _setRGBData } from '../../modules/_setRGBData';

import { _setRGBRatios } from '../../modules/_setRGBRatios';

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
}

export const paintsSlice = createSlice({
  name: 'paints',
  initialState,
  reducers: {
    setRGBData: (state) => {
      state.paints = state.paints.map((paint) => { return { ...paint, rgb : _setRGBData(paint.hex)}});
    },
    sortPaints: (state) => {
      state.paints = state.paints.sort(_sortPaints)
    },
  }
});

export const { setRGBData, sortPaints } = paintsSlice.actions;

export const selectPaints = (state) => state.paints.paints;

export default paintsSlice.reducer;
