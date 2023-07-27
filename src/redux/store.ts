import { configureStore } from "@reduxjs/toolkit";
import { netlifyApi } from "./services/netlify";
import playerSlice from "./features/playerSlice";
import favoriteSlice from "./features/favoriteSlice";

export const store = configureStore({
    reducer: {
        [netlifyApi.reducerPath]: netlifyApi.reducer,
        player: playerSlice,
        favorite: favoriteSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(netlifyApi.middleware)
})