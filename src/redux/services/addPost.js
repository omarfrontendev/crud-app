import { createAsyncThunk } from "@reduxjs/toolkit";

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (data, thunkAPI) => {
    const { rejecteWithError } = thunkAPI;

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`http://localhost:5000/posts/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      return rejecteWithError(error.message);
    }
  }
);
