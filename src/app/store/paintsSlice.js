
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { _setRGBData } from '../../modules/_setRGBData';

import { _setRGBRatios } from '../../modules/_setRGBRatios';

import { unzip } from 'fflate';

const loadPaints = createAsyncThunk('paints/loadPaitsStatus',
  async() => {
  const zipPaints = require('../../resources/allPaints.json.gz');
  const unzippedPaints = await unzip(zipPaints, (err, unzipped) => {
    return unzipped
  })
  return unzippedPaints
})

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
  paints: [],
  loading: 'idle',
  brands: ['Avery',
            'Behr',
            'Benjamin-Moore',
            'Colorhouse',
            'Dunn-Edwards',
            'Dutch',
            'Farrow-Ball',
            'HL',
            'Kilz',
            'PPG',
            'Sherwin-Williams',
            'Valspar'],
}

export const paintsSlice = createSlice({
  name: 'paints',
  initialState,
  reducers: {
    setRGBData: (state) => {
      state.paints = state.paints.map((paint) => { return { ...paint, rgb : _setRGBData(paint.hex)}});
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadPaints.fulfilled, (state, action) => {
      state.paints.push(action.payload)
    })
  }
});

export const { setRGBData } = paintsSlice.actions;

export const selectPaints = (state) => state.paints.paints;

export const selectBrands = (state) => state.paints.brands;

export default paintsSlice.reducer;
