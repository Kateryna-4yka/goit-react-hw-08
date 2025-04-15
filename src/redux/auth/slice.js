import { createSlice } from "@reduxjs/toolkit"
import { logIN, logOut, refresUser, register } from "./operations";
import { act } from "react";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log(action);
      })

      .addCase(logIN.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIN.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logIN.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log(action);
      })





      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isLoggedIn = false;
        state.user.name = ``;
        state.user.email = null;
        state.token = null;
      })


      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log(action);
      })


      .addCase(refresUser.pending, (state=>{
        state.isRefreshing = true;
      }))
      .addCase (refresUser.fulfilled, (state, action)=>{

        state.user= action.payload;
        state.isLoggedIn= true;
        state.isRefreshing = false;
      })
      .addCase (refresUser.rejected, (state,action)=>{
        state.isRefreshing = false;
      })
  },
});

export default authSlice.reducer;
