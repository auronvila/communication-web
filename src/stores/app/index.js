import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "tr",
  theme: "default",
  sidebarType: "app",
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    _setSidebarType: (state, action) => {
      state.sidebarType = action.payload;
    },
    _setLanguage: (state, action) => {
      state.language = action.payload;
    },
    _setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});
export const { _setTheme, _setLanguage, _setSidebarType } = app.actions;
export default app.reducer;
