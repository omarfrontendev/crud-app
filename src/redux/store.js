import { configureStore } from "@reduxjs/toolkit";
import posts from "./features/postsSlice";
const Store = configureStore({
  reducer: {
    posts,
  },
});

export default Store;
