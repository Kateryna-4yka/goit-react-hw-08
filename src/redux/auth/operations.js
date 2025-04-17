import { createAsyncThunk }  from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

function setToken (token) {axios.defaults.headers.common.Authorization = token;};

export const register = createAsyncThunk ("auth/register", 
    async (userInfo, thunkAPI)=>{
        try {
            const response = await axios.post("/users/signup", userInfo);
            setToken(response.data.token);
    return response.data;
}
catch (error) {return thunkAPI.rejectWithValue(error.message)}}); 

export const logIN = createAsyncThunk ("auth/login", 
    async (userInfo, thunkAPI)=>{
        try {
            const response = await axios.post("/users/login", userInfo);
            setToken(response.data.token);
 return response.data;
}
catch (error) {return thunkAPI.rejectWithValue(error.message)}}); 

export const logOut = createAsyncThunk ("auth/logOut", 
    async (_,thunkAPI)=>{
        try {
            await axios.post("/users/logout");
            setToken(``);
}
catch (error) {return thunkAPI.rejectWithValue(error.message)}}); 

// відправляємо токін на бекенд
export const refresUser = createAsyncThunk ("auth/refres", 
    async (_,thunkAPI)=>{
        try {
            const stateFromthunkAPI = thunkAPI.getState();
            setToken(stateFromthunkAPI.auth.token);
            const response = await axios.get("/users/current");
            return response.data;
// повертаємо об,єкт користувача імя та емейл
}
catch (error) {return thunkAPI.rejectWithValue(error.message)}}, 
{condition: (_,thunkAPI) =>{
    const stateFromthunkAPI = thunkAPI.getState();
   return stateFromthunkAPI.auth.token !== null
}}); 


