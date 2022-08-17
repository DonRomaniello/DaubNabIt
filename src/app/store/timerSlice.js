import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timer: 0,
  lastTime: Date.now(),
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    resetTimer: (state) => {
      state.timer = 0;
      state.lastTime = Date.now();
    },
    incrementTimer: (state) => {
      state.timer += 1;
      state.lastTime = Date.now();
    },
  },

});

export const { resetTimer, incrementTimer } = timerSlice.actions;

export const selectTimer = (state) => state.timer;

export default timerSlice.reducer;
