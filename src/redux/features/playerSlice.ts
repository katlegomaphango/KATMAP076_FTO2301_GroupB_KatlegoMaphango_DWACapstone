import { createSlice } from "@reduxjs/toolkit";
import { EPISODE, INITIALSTATE } from "../../assets/constants";

const initialState: INITIALSTATE = {
    isActive: false,
    isPlaying: false,
    activeEpisode: {
        description: '',
        episode: 0,
        file: '',
        title: ''
    }
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveEpisode: (state, action: {type: string, payload:  EPISODE}) => {
            state.activeEpisode = action.payload

            state.isActive = true
        },
        playPause: (state, action: { type: string, payload: boolean}) => {
            state.isPlaying = action.payload
        },
    }
})

export const {
    setActiveEpisode,
    playPause,
} = playerSlice.actions

export default playerSlice.reducer