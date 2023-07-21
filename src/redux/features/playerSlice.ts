import { createSlice } from "@reduxjs/toolkit";
import { EPISODE, INITIALSTATE, SEASON, SHOW } from "../../assets/constants";

const initialState: INITIALSTATE = {
    currentSeasonEpisodes: [],
    currentIndex: 0,
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
        setActiveEpisode: (state, action: {type: string, payload: { index: number, episode: EPISODE, SeasonData: SEASON }}) => {
            state.activeEpisode = action.payload.episode

            if(action.payload?.SeasonData?.episodes) {
                state.currentSeasonEpisodes = action.payload.SeasonData.episodes
            }

            state.currentIndex = action.payload.index
            state.isActive = true

        },
        nextEpisode: (state, action) => {
            console.log(state)
            console.log(action)
        },
        prevEpisode: (state, action) => {
            console.log(state)
            console.log(action)
        },
        playPause: (state, action: { type: string, payload: boolean}) => {
            state.isPlaying = action.payload
            console.log('play pause pressed')
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