import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk('characters/', async(pageNum) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character?page=${pageNum}`);
    console.log('API Response:', res.data); // API yanıtını kontrol et
    return res.data;
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

                state.isLoading = true;

            })

            .addCase(fetchCharacters.fulfilled, (state, action) => {

                state.items = [...state.items, ...action.payload.results ] 

                state.status = 'succeeded';

                state.isLoading = false;

                state.num +=1; 

                if(action.payload.length < 20){
                    state.hasNextPage = false;
                } 

           

            })

            .addCase(fetchCharacters.rejected, (state, action) => {

                state.status = 'failed';

                state.error = action.error.message;

                state.isLoading = false;


            });

    },
       

});

export default charactersSlice.reducer;