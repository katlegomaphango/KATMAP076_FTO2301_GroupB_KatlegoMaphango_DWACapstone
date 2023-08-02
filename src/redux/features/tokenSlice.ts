import { createSlice } from "@reduxjs/toolkit";
import { TOKEN } from "../../assets/constants";

type initialState = {
    token: TOKEN
}

const initialState: initialState = {
    token: {
        session: null,
        user: null
    }
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        removeToken: (state) => {
            state.token = initialState.token
        }
    }
})

export const {
    setToken,
    removeToken
} = tokenSlice.actions

export default tokenSlice.reducer