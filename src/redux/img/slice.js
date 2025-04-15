import { createSlice } from '@reduxjs/toolkit';
import {  requestOnUnsplsh } from './operations';

const slice = createSlice ({
    name: `image`, 
    initialState: 
        {   info: [],
            loading: false,
            error: null,
    },
  extraReducers: builder => {
    builder
    .addCase(requestOnUnsplsh.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(requestOnUnsplsh.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.info = action.payload;
    })
    .addCase(requestOnUnsplsh.rejected, (state, action) => {
      state.loading =  false;
      state.error = action.payload;
    })
},
});
 
export default slice.reducer;
