
import { createSlice } from '@reduxjs/toolkit';

import { _setRGBData } from '../../modules/_setRGBData';

const _loadPaints = () => {
  const paintFile = require('../../resources/allPaints.json');
  return paintFile
}

const initialState = {
  paints: [],
  selectedBrand: 'all',
  mixRatio: 1,
  brands: [ 'All Brands',
            'Avery',
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
    loadPaints: (state) => {
      state.paints = (_loadPaints());
    },
    setBrand: (state, action) => {
      console.log(action.payload)
      state.selectedBrand = action.payload
    },
    setMixRatio: (state, action) => {
      state.mixRatio = action.payload;
    }
  },
});

export const { loadPaints, setBrand, setMixRatio, setRGBData } = paintsSlice.actions;

export const selectPaints = (state) => state.paints.paints;

export const selectBrands = (state) => state.paints.brands;

export const currentBrand = (state) => state.paints.selectedBrand;

export const selectMixRatio = (state) => state.paints.mixRatio;

export default paintsSlice.reducer;
