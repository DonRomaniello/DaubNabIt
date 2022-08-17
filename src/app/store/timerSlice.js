import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timer: 0,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    resetTimer: (state) => {
      state.timer = 0;
    },
    incrementTimer: (state) => {
      state.timer += 1;
    },
  },

});

export const { resetTimer, incrementTimer } = timerSlice.actions;

export const selectTimer = (state) => state.timer;

export default timerSlice.reducer;
