import store from 'store'
import { createSlice } from '@reduxjs/toolkit'
import { useStore } from 'react-redux'

const initialState = {
  isLoggedIn: store.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!}`) ? true : false,
  profileData: { first_name: '', last_name: '' },
  openLogoutModal: false
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
      state.profileData = action?.payload
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      state.openLogoutModal = false
      store.clearAll();
    },
    toggleLogoutModal: (state, action) => {
      state.openLogoutModal = action.payload;
    }

  },
})

export const { handleLogin, setMedata, setLogOut, toggleLogoutModal } = sessionSlice.actions;

export default sessionSlice.reducer
