import { createSlice } from "@reduxjs/toolkit";
import { INITIALSTATE } from "../../assets/constants";

const initialState: INITIALSTATE = {
    currentEpisode: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeEpisode: {}
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveEpisode: (state, action) => {
            console.log(state)
            console.log(action)
        },
        nextEpisode: (state, action) => {
            console.log(state)
            console.log(action)
        },
        prevEpisode: (state, action) => {
            console.log(state)
            console.log(action)
        },
        playPause: (state, action) => {
            console.log(state)
            console.log(action)
        },
    }
})

export const {
    setActiveEpisode,
    nextEpisode,
    playPause,
    prevEpisode
} = playerSlice.actions

export default playerSlice.reducer