import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocations = createAsyncThunk('locations/getLocations', async(pageNum) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/location?page=${pageNum}`);
    console.log('API Response:', res.data);
    return res.data;
})

const initialState = {
    items: [],
    status: "idle",
    error: null,
    num: 1,
    hasNextPage: true,
}

export const locationsSlice= createSlice({
    name: 'episode',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder

            .addCase(fetchLocations.pending, (state) => {

                state.status = 'loading';

                state.isLoading = true;

            })

            .addCase(fetchLocations.fulfilled, (state, action) => {

                state.items = [...state.items, ...action.payload.results ] 

                state.status = 'succeeded';

                state.num +=1; 

                if(action.payload.results.length < 20){
                    state.hasNextPage = false;
                } 
            })

            .addCase(fetchLocations.rejected, (state, action) => {

                state.status = 'failed';

                state.error = action.error.message;

            });

    },
       

});

export default locationsSlice.reducer;