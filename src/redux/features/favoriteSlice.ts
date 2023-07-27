import { createSlice } from "@reduxjs/toolkit";
import { EPISODE, User } from "../../assets/constants";

// type FAV = {
//     created_at?: string
//     description: string
//     episode_id: number
//     file: string
//     id?: string
//     season_id: number
//     show_id: number
//     title: string
//     user_id: string
//     list_favorites: any[]
// }

// const initialState: FAV = {
//     created_at: '',
//     description: '',
//     episode_id: 0,
//     file: '',
//     id: '',
//     season_id: 0,
//     show_id: 0,
//     title: '',
//     user_id: '',
//     list_favorites: []
// }

type initialState = {
    likedEpisodes: any[]
}

const initialState: initialState = {
    likedEpisodes: []
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        AddToLikedEpisodes: (state, action: { type: string, payload: EPISODE}) => {
            state.likedEpisodes.push(action.payload)
        },
        SetAllLikedEpisodes: (state, action: {type: string, payload: any[]}) => {
            state.likedEpisodes = action.payload
        }
    }
})

export const {
    AddToLikedEpisodes,
    SetAllLikedEpisodes
} = favoriteSlice.actions

export default favoriteSlice.reducer