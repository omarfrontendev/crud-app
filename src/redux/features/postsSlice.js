import { createSlice } from "@reduxjs/toolkit";
import { getPosts, deletePost, getSinglePost } from "../services";

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    // ====
    loadingDelete: false,
    errorDelete: null,
    // ====
    postDetails: {},
  },
  reducers: {},
  extraReducers: {
    // get posts:=
    [getPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.posts = [];
    },

    // deletePost:=
    [deletePost.pending]: (state) => {
      state.loadingDelete = true;
      state.errorDelete = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.loadingDelete = false;
      state.errorDelete = null;
    },
    [deletePost.rejected]: (state, action) => {
      state.loadingDelete = false;
      state.errorDelete = action.payload;
    },

    // get single post: =
    [getSinglePost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.postDetails = action.payload;
    },
    [getSinglePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update Post: =
    // [updatePost.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [updatePost.fulfilled]: (state, action) => {},
    // [updatePost.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
});

export default PostsSlice.reducer;
