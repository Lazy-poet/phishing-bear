import store from "store";
import { createSlice } from "@reduxjs/toolkit";
import { useStore } from "react-redux";

export enum ActiveModal {
  LOGIN,
  SIGNUP,
  SIGNUP_VERIFICATION_SENT,
  FORGOT_PASSWORD,
  CHOOSE_PASSWORD,
  SUBSCRIPTION,
  PERSONAL_INFO,
  LOGOUT,
}

const initialState = {
  isLoggedIn: store.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!}`)
    ? true
    : false,
  profileData: { first_name: "", last_name: "" },
  activeModal: null,
};

const sessionSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    handleLogin: (state: any, action: any) => {
      store.set(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!, action?.payload);
      state.isLoggedIn = action?.payload ? true : false;
    },
    setMedata: (state: any, action: any) => {
      state.profileData = action?.payload;
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      state.activeModal = null;
      store.clearAll();
    },
    toggleModal: (state, action) => {
      state.activeModal = action.payload;
    },
  },
});

export const { handleLogin, setMedata, setLogOut, toggleModal } =
  sessionSlice.actions;

export default sessionSlice.reducer;
