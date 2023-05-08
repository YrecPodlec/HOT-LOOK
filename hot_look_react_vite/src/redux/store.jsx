import { configureStore } from '@reduxjs/toolkit'
import {collectionReducer} from "./slices/collection.jsx";

const store = configureStore({
    reducer: {
        collection: collectionReducer
    }
})

export default store;