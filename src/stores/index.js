import { configureStore } from "@reduxjs/toolkit";

//reducers
import app from "~/stores/app/index.js";
const store = configureStore({
  reducer: {
    app,
  },
});

export default store;
