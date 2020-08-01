import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIOptions from "@r/api-client";
import { endpoints } from "@r/api-client";
const { PostsEndpoint, CommentsEndpoint } = endpoints;

const fetchPosts = createAsyncThunk("subreddit/posts", async ({ subreddit }) => {
  const response = await PostsEndpoint.get(APIOptions, {
    subredditName: subreddit,
  });

  const posts = response.results.map((result) =>
    response.getModelFromRecord(result)
  );
  return posts;
});

const subredditSlice = createSlice({
  name: "subreddit",
  initialState: {
    name: '',
    isLoading: false,
    error: null,
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      console.log("fetchPosts/pending");
      state.name = action.meta.arg.subreddit;
      state.isLoading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      console.log("fetchPosts/fulfilled");
      state.posts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchPosts.rejected]: (state, action) => {
      console.log("fetchPosts/rejected");
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export { fetchPosts };

export default subredditSlice.reducer;
