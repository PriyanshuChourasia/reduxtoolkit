import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from "../features/dogsapi/dogs-api-Slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware) =>{
       return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});



