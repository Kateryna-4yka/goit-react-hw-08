import { createSlice } from "@reduxjs/toolkit"
import { build } from "vite"


const slise = createSlice ({
    name: 'auth',
    initialState: 
    {
        user: {
          name: null,
          email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
      },

      extraReducers: builder =>{
        builder



      }
})

export default slise.reducer;


