import { configureStore } from '@reduxjs/toolkit'

import panelsReducer from './panelsSlice'

import paintsReducer from './paintsSlice'

export const store = configureStore({
  reducer: {
    panels: panelsReducer,
    paints: paintsReducer,
  },
})
