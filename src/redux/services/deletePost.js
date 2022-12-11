import { createAsyncThunk } from "@reduxjs/toolkit";

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
