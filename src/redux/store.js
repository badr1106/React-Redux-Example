import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.js";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  // middleware: [logger, thunk],
});
