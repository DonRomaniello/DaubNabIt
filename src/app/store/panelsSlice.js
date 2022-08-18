import { createSlice } from '@reduxjs/toolkit';

import { _setRGBData } from '../../modules/_setRGBData';

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
    matches: [],
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
    addMatch: (state, action) => {
      console.log('match found')
      state.colors = state.colors.map((panel) => {
        if (panel.matches.includes(action.payload.paint)) {
          return panel
        } else {
          return ({...panel, matches: [...panel.matches, action.payload.paint]})
        }
      })
    }
  },

});

export const { reGenerate, addMatch } = panelsSlice.actions;

export const selectPanels = (state) => state.panels.colors;

export default panelsSlice.reducer;
