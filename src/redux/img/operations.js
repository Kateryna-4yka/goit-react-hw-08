import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const requestOnUnsplsh = createAsyncThunk('move/fetchMovies', 
    async ({searchWord,page}, thunkApi)=>{
      try {     
        const request = await axios.get (`https://api.unsplash.com/search/photos`, {params: {
            client_id: 'fsa77XoDKPaykQAv_wi--9WyXd62ZKKk8D6ar1O_kF4',
            page: page,
            query: searchWord,
            per_page: 10,}});
console.log(request.data.results);
    return request.data.results;
      } 
      catch (error) {
        return thunkApi.rejectWithValue(error.message);}})