import { configureStore } from "@reduxjs/toolkit";
import { netlifyApi } from "./services/netlify";
import playerSlice from "./features/playerSlice";

export const store = configureStore({
    reducer: {
        [netlifyApi.reducerPath]: netlifyApi.reducer,
        player: playerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(netlifyApi.middleware)
})