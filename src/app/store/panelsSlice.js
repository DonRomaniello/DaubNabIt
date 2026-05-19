import { createSlice } from '@reduxjs/toolkit';
import { _setRGBData } from '../../modules/_setRGBData';
import { _searchPaints } from '../../modules/_searchPaints';
import { _getVisibility } from '../../modules/_getVisibility';

const _acceptHex = (hex) => ({
  color: hex,
  rgb: _setRGBData(hex),
  textBlack: _getVisibility(hex),
});

const randomPanel = () => {
  const randHex = () =>
    Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const color = '#' + randHex() + randHex() + randHex();
  return _acceptHex(color);
};

const initializer = () => [randomPanel(), randomPanel(), randomPanel()];

const initialState = {
  colors: initializer(),
  openedParade: false,
};

export const panelsSlice = createSlice({
  name: 'panels',
  initialState,
  reducers: {
    reGenerate: (state) => {
      state.colors = initializer();
      state.openedParade = false;
    },
    findMatches: (state, action) => {
      state.colors.forEach((color) => {
        color.matches = _searchPaints(color.rgb, action.payload);
      });
    },
    setParadeOpen: (state) => {
      state.openedParade = true;
    },
    closeParade: (state) => {
      state.openedParade = false;
    },
    replacePanel: (state, action) => {
      state.colors.splice(action.payload.idx, 1, _acceptHex(action.payload.hex));
    },
  },
});

export const {
  findMatches,
  reGenerate,
  replacePanel,
  setParadeOpen,
  closeParade,
} = panelsSlice.actions;

export const selectPanels = (state) => state.panels.colors;
export const paradeIsOpened = (state) => state.panels.openedParade;

export default panelsSlice.reducer;
