/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endpoint } from "../../utils/APIRoutes";
const api= 'https://www.pybreeze.com/api/'

export const login = createAsyncThunk(
  "auth/login",
  async ({ user, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await  axios.post(`${endpoint}/api/login/`,user);
      // toast.success("Login Successfully");
      navigate("/dashboard");
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err.response.data.error);
      toast.error(err.response.data.error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ user, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await  axios.post(`${endpoint}/api/register/`,user);
      toast.success("Register Successfully");
      navigate("/login");
      // return response.data;
      if (response.data.code===500) {
        console.log(response.data);
        console.log( "Error Try Again later!!",response.error);

      }
    } catch (err) {
      console.log(err.message);
      console.log( "Error Try Again later!!",err);
      console.log('====================================');
      toast.error('error try again invalid credeantials',err);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await  axios.post(`${api}/delete-user`,id);
      toast.success("Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const googleSignIn = createAsyncThunk(
  "auth/googleSignIn",
  async ({ result, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.googleSignIn(result);
      toast.success("Google Sign-in Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [googleSignIn.pending]: (state, action) => {
      state.loading = true;
    },
    [googleSignIn.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [googleSignIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.user = state.user.filter((item) => item._id !== id);
        state.user = state.user.filter((item) => item._id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;