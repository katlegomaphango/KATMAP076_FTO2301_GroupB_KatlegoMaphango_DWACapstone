import { createSlice } from "@reduxjs/toolkit";
import { EPISODE, User } from "../../assets/constants";

type FAV = {
    created_at?: string
    description: string
    episode_id: number
    file: string
    id?: string
    season_id: number
    show_id: number
    title: string
    user_id: string
}

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
    likedEpisodes: FAV[] | any[]
}

const initialState: initialState = {
    likedEpisodes: []
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        AddToLikedEpisodes: (state, action: { type: string, payload: FAV}) => {
            state.likedEpisodes.push(action.payload)
        },
        SetAllLikedEpisodes: (state, action: {type: string, payload: any[]}) => {
            state.likedEpisodes = action.payload
        },
        removeEpisode: (state, action: {type: string, payload: {epId: number, userId: string, liked: FAV}}) => {
            // const { epId, userId, liked } = action.payload
            // console.log( state.likedEpisodes.indexOf(liked))
            // const temp = state.likedEpisodes.filter((item) => userId !== item.user_id && epId !== item.episode_id)
            // state.likedEpisodes = temp
            // console.log(epId, userId)
            // console.log( state.likedEpisodes.indexOf(liked))
        }
    }
})

export const {
    AddToLikedEpisodes,
    SetAllLikedEpisodes,
    removeEpisode
} = favoriteSlice.actions

export default favoriteSlice.reducer