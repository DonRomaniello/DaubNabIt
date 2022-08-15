import { createSlice } from '@reduxjs/toolkit';

import { makeRGBObject } from '../../modules/makeRGBObject';

const paints = require('../../resources/json/behr.json');

const initialState = {
  paints,
  swatchMatches: [],
}

export const paintsSlice = createSlice({
  name: 'paints',
  initialState,
  reducers: {
    setRGBs: (state) => {
      state.paints = state.paints.map((paint) => { return { ...paint, rgb : makeRGBObject(paint.hex)}});
    },
    // getMatches: (state, action) => {
    //   state.swatchMatches = action.payload
    // },
  }
});

export const { setRGBs } = paintsSlice.actions;

export const selectPaints = (state) => state.paints.paints;

export const selectSwatchMatches = (state) => state.paints.swatchMatches;

export default paintsSlice.reducer;
