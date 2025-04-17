import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api_key = "33763e91ccb2984b75df6b51ba2f704c";
const url = "https://api.themoviedb.org/3";
const token = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzc2M2U5MWNjYjI5ODRiNzVkZjZiNTFiYTJmNzA0YyIsIm5iZiI6MTc0Mjk3OTcxNy42NjQsInN1YiI6IjY3ZTNjMjg1MTZhM2M1YzIyNGYwYTI4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CR_12a3tzzSMNZ5N-z2CAlBAw4j7Bq0w__gAaM3Z908",
  },};

// ======================запити за популярними фільмами цього дня
export const fetchMovies = createAsyncThunk('move/fetchMovies', 
async (_, thunkApi)=>{
  try {     
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
    const trendingToday = await axios.get(url, token);
    return trendingToday.data.results;
  } 
  catch (error) {
    return thunkApi.rejectWithValue(error.message);}})

// ==============================================запит по id
export const  requestsMovieByID = createAsyncThunk ('move/requestsMovieByID', 
async ({id = '', endpoint = ""}, thunkApi) =>{
try {
  const movie = await axios.get(`${url}/movie/${id}${endpoint}?api_key=${api_key}`,
    token);
  return movie.data;
}
catch (error) {
  return thunkApi.rejectWithValue(error.message);}})

// ==============================================запит по акторам та відгуки

  export const requestsMovieDopInfo = createAsyncThunk(
    'movie/fetchCast',
    async ({id = '', endpoint = ""}, thunkApi) =>{
      try {
        const movie = await axios.get(`${url}/movie/${id}${endpoint}?api_key=${api_key}`,
          token);
        return movie.data;
            }
      catch (error) {
        return thunkApi.rejectWithValue(error.message);}})


// ====================================================filter

export const filterByName = createAsyncThunk(
  'movie/filter',

 async (query, thunkApi) =>{
  try {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}`;
  
  const trendingToday = await axios.get(url, token);

  return trendingToday.data.results;
}
catch (error) {
  return thunkApi.rejectWithValue(error.message);}})

