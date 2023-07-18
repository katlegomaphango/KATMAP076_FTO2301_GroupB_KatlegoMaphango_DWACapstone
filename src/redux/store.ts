import { configureStore } from "@reduxjs/toolkit";
import { netlifyApi } from "./services/netlify";

export const store = configureStore({
    reducer: {
        [netlifyApi.reducerPath]: netlifyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(netlifyApi.middleware)
})