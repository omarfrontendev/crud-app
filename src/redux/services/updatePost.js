import { createAsyncThunk } from "@reduxjs/toolkit";

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (updatedPost, thunkAPI) => {
    const { rejecteWithError } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/posts/${updatedPost.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedPost),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejecteWithError(error.message);
    }
  }
);
