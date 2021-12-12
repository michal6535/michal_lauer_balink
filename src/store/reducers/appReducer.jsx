import { createSlice } from "@reduxjs/toolkit";
import locales from "../../locales/index";

const initialState = {
  locale: Object.keys(locales)[0],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = appSlice.actions;
export const selectLocale = (state) => state.app.locale;

export default appSlice.reducer;
