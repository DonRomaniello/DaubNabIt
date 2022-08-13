import { configureStore } from '@reduxjs/toolkit'

import panelsReducer from './panelsSlice'


export const store = configureStore({
  reducer: {
    panels: panelsReducer,
  },
})
