import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestAccessToken } from '../api/reddit';

const login = createAsyncThunk("auth/login", async ({username, password}) => {
  const response = await requestAccessToken(username, password);
  console.log(response);
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    token: "",
    error: "",
  },
  reducers: {

  },
  extraReducers: {
    [login.pending]: (state, action) => {
      console.log("login/pending");
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      console.log("login/fulfilled");
      state.token = action.payload;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      console.log("login/rejected");
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export  { login };

export default authSlice.reducer;
