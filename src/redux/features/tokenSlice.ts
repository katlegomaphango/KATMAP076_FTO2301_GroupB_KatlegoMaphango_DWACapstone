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
        }
    }
})

export const {
    setToken
} = tokenSlice.actions

export default tokenSlice.reducer