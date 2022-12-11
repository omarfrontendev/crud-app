import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/posts/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
