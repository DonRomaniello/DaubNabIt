import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _setRGBData } from '../../modules/_setRGBData';

export const loadPaints = createAsyncThunk('paints/load', async () => {
  const module = await import('../../resources/allPaints.json');
  const raw = module.default || module;
  return raw.map((paint) => ({ ...paint, rgb: _setRGBData(paint.hex) }));
});

const initialState = {
  paints: [],
  loading: false,
  selectedBrand: 'all',
  mixRatio: 1,
  brands: [
    'All Brands',
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
    'Valspar',
  ],
};

export const paintsSlice = createSlice({
  name: 'paints',
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    setMixRatio: (state, action) => {
      state.mixRatio = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPaints.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPaints.fulfilled, (state, action) => {
        state.paints = action.payload;
        state.loading = false;
      })
      .addCase(loadPaints.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setBrand, setMixRatio } = paintsSlice.actions;

export const selectPaints = (state) => state.paints.paints;
export const selectBrands = (state) => state.paints.brands;
export const currentBrand = (state) => state.paints.selectedBrand;
export const selectMixRatio = (state) => state.paints.mixRatio;
export const selectPaintsLoading = (state) => state.paints.loading;

export default paintsSlice.reducer;
