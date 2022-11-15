import store from 'store'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn:  store.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY}`) ? true : false,
  profleData: {first_name: 'Emmanuel', last_name: 'Seyi'}
}

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    setToken: (state: any, action: any) => {
      store.set(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || 'bIESIcj42We9', action?.payload)
      state.isLoggedIn = action?.payload ? true : false
    },
    setMedata: (state: any, action: any) => {
      // state.profleData = action?.payload
    },
    setLogOut: () => {
      store.clearAll()
    }
  },
})

export const { setToken, setMedata, setLogOut } = sessionSlice.actions;

export default sessionSlice.reducer
