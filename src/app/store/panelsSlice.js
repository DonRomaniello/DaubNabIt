import { createSlice } from '@reduxjs/toolkit';

import { _setRGBData } from '../../modules/_setRGBData';

import { _searchPaints } from '../../modules/_searchPaints';

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
  }
}

const initializer = () => {
  return [randomPanel(),
          randomPanel(),
          randomPanel()]
}

const initialState = {
  colors: initializer(),
  openedParade: false,
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
        color.matches = _searchPaints(color.rgb, action.payload)
      })
    },
    setParadeOpen: (state) => {
      state.openedParade = true;
    }
  }
});

export const { reGenerate, findMatches, setParadeOpen } = panelsSlice.actions;

export const selectPanels = (state) => state.panels.colors;

export const paradeIsOpened = (state) => state.panels.openedParade;

export default panelsSlice.reducer;
