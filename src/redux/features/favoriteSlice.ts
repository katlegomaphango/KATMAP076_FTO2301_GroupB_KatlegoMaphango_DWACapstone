import { createSlice } from "@reduxjs/toolkit";
import { EPISODE } from "../../assets/constants";

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

type likedEP = {
    episode: EPISODE
    showTitle: string
}

type initialState = {
    likedEpisodes: likedEP[] | any[]
    isliked: boolean
    likedEp: EPISODE
}

const initialState: initialState = {
    likedEpisodes: [],
    isliked: false,
    likedEp: {
        description: '',
        episode: 0,
        file: '',
        title: ''
    }
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        AddToLikedEpisodes: (state, action: { type: string, payload: { episode: EPISODE, showTitle: string }}) => {
            state.likedEpisodes.push(action.payload)

            state.likedEp = action.payload.episode
            state.isliked = true
        },
        SetAllLikedEpisodes: (state, action: {type: string, payload: any[]}) => {
            state.likedEpisodes = action.payload
        },
        removeEpisode: (state, action: {type: string, payload: { episode: EPISODE, showTitle: string }}) => {
            const { episode, showTitle } = action.payload

            state.likedEpisodes = state.likedEpisodes.filter((item) => showTitle === item.showTitle && episode.episode === item.episode.id)
            state.isliked = false
            state.likedEp = initialState.likedEp
            console.log(action)
        },
        likeDislike: (state, action: { type: string, payload: boolean}) => {
            state.isliked = action.payload
        },
    }
})

export const {
    AddToLikedEpisodes,
    SetAllLikedEpisodes,
    removeEpisode,
    likeDislike,
} = favoriteSlice.actions

export default favoriteSlice.reducer