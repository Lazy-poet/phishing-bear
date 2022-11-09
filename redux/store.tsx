import { configureStore } from '@reduxjs/toolkit'

import sessionSlice from './slices/session.slice'

const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch