import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/auth";
import subredditReducer from "../features/subreddit";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    auth: authReducer,
    subreddit: subredditReducer,
  },
  middleware,
});

export default store;
