import { configureStore } from '@reduxjs/toolkit'

import panelsReducer from './panelsSlice'

import paintsReducer from './paintsSlice'

import timerReducer from './timerSlice'

export const store = configureStore({
  reducer: {
    panels: panelsReducer,
    paints: paintsReducer,
    timer: timerReducer,
  },
})
