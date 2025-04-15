import { createSlice } from '@reduxjs/toolkit';
import {  fetchMovies,requestsMovieByID, requestsMovieDopInfo } from './operations';

const slice = createSlice ({
    name: `move`, 
    initialState: 
        {move: {
            info: [],
            loading: false,
            error: null,
            details: {}, 
            dopInfo: {},
    }},

  extraReducers: builder => {
    builder
  
    .addCase(fetchMovies.pending, (state) => {
      state.move.loading = true;
      state.move.error = null;
    })
    .addCase(fetchMovies.fulfilled, (state, action) => {
      state.move.loading = false;
      state.move.error = null;
      state.move.info = action.payload;
    })
    .addCase(fetchMovies.rejected, (state, action) => {
      state.move.loading =  false;
      state.move.error = action.payload;
    })

    .addCase(requestsMovieByID.pending, (state) => {
      state.move.loading = true;
      state.move.error = null;
    })
    .addCase(requestsMovieByID.fulfilled, (state, action) => {
      state.move.loading = false;
      state.move.error = null;
      state.move.details = action.payload;
    })
    .addCase(requestsMovieByID.rejected, (state, action) => {
      state.move.loading =  false;
      state.move.error = action.payload;
    })

    .addCase(requestsMovieDopInfo.pending, (state) => {
      state.move.loading = true;
      state.move.error = null;
    })
    .addCase(requestsMovieDopInfo.fulfilled, (state, action) => {
      state.move.dopInfo = action.payload;
      state.move.loading = false;
    })
    .addCase(requestsMovieDopInfo.rejected, (state, action) => {
      state.move.loading = false;
      state.move.error = action.payload;
    })
  },
});
 
  export default slice.reducer;
