import store from 'store'
import { createSlice } from '@reduxjs/toolkit'
import { useStore } from 'react-redux'

const initialState = {
  isLoggedIn: store.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!}`) ? true : false,
  profleData: { first_name: 'Emmanuel', last_name: 'Seyi' }
}

const sessionSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    handleLogin: (state: any, action: any) => {
      store.set(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!, action?.payload)
      state.isLoggedIn = action?.payload ? true : false
    },
    setMedata: (state: any, action: any) => {
      state.profleData = action?.payload
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      store.clearAll()
    }
  },
})

export const { handleLogin, setMedata, setLogOut } = sessionSlice.actions;

export default sessionSlice.reducer
