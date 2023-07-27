import { configureStore } from "@reduxjs/toolkit";
import { netlifyApi } from "./services/netlify";
import playerSlice from "./features/playerSlice";
import favoriteSlice from "./features/favoriteSlice";
import tokenSlice from "./features/tokenSlice";

export const store = configureStore({
    reducer: {
        [netlifyApi.reducerPath]: netlifyApi.reducer,
        player: playerSlice,
        favorite: favoriteSlice,
        token: tokenSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(netlifyApi.middleware)
})