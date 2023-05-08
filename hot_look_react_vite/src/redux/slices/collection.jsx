import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

export const fetchCollection = createAsyncThunk('collection/fetchCollection', async () =>{
    const {data} = await axios.get('/collections')
    return data;
})

const initialState = {
    collections: {
        items: [],
        status: 'loading'
    },
    images: {
        items: [],
        status: 'loading'
    }
}

const collectionSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCollection.pending] : (state) => {
            state.collections.status = 'loading';
        },
        [fetchCollection.fulfilled] : (state, action) => {
            state.collections.items = action.payload;
            state.collections.status = 'loaded';
        }
    }
})

export const collectionReducer = collectionSlice.reducer;