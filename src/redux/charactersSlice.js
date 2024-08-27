import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async() => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character`);
    console.log(res.data)
    return res.data.results;
    
})

const initialState = {
    items: [],
    status: "idle",
    error: null,
    num: 1,
    hasNextPage: true,

}

export const charactersSlice= createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder

            .addCase(fetchCharacters.pending, (state) => {

                state.status = 'loading';

            })

            .addCase(fetchCharacters.fulfilled, (state, action) => {

                state.items = action.payload; 

                state.status = 'succeeded';

            })

            .addCase(fetchCharacters.rejected, (state, action) => {

                state.status = 'failed';

                state.error = action.error.message;

            });

    },
       

});

export default charactersSlice.reducer;