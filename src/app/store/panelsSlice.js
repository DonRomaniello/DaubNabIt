import { createSlice } from '@reduxjs/toolkit';

import { _setRGBData } from '../../modules/_setRGBData';

import { _searchPaints } from '../../modules/_searchPaints';

const paints = require('../../resources/json/behr.json');

const randomPanel = () => {
  const randHex = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  }
  let r = randHex()
  let g = randHex()
  let b = randHex()
  let color = '#' + r + g + b
  let rgb = _setRGBData(color)
  return {
    color,
    rgb,
    matches: _searchPaints(rgb, paints),
  }
}

const initializer = () => {

  return [randomPanel(),
          randomPanel(),
          randomPanel()]
}

const initialState = {
  colors: initializer(),
}
export const panelsSlice = createSlice({
  name: 'panels',
  initialState,
  reducers: {
    reGenerate: (state) => {
      state.colors = initializer();
    },
    findMatches: (state, action) => {
      state.colors.forEach((color) => {
      })
    },
  }
});

export const { reGenerate, findMatches } = panelsSlice.actions;

export const selectPanels = (state) => state.panels.colors;

export default panelsSlice.reducer;
