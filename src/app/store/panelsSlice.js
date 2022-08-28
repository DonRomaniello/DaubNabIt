import { createSlice } from '@reduxjs/toolkit';

import { _setRGBData } from '../../modules/_setRGBData';

import { _searchPaints } from '../../modules/_searchPaints';
import { _getVisibility } from '../../modules/_getVisibility';

const _acceptHex = (hex) => {

  let rgb = _setRGBData(hex)
  let textBlack = _getVisibility(hex)
  return {
    color: hex,
    rgb,
    textBlack,
  }
}

const randomPanel = () => {
  const randHex = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  }
  let r = randHex()
  let g = randHex()
  let b = randHex()
  let color = '#' + r + g + b
  return _acceptHex(color)
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
    },
    replacePanel: (state, action) => {
      console.log('runs', action.payload)
      const replacement = _acceptHex(action.payload.hex)
      state.colors.splice(action.payload.idx, 1, replacement)
    }
  }
});

export const { findMatches, reGenerate, replacePanel, setParadeOpen } = panelsSlice.actions;

export const selectPanels = (state) => state.panels.colors;

export const paradeIsOpened = (state) => state.panels.openedParade;

export default panelsSlice.reducer;
