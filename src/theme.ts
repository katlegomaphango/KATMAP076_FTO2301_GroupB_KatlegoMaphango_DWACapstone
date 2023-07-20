import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            dark: '#163A5F',
            light : '#21ABA5',
            main: '#1D566E',
            contrastText: '#45EBA5',
        },
        secondary: {
            dark: '#212A3E',
            light : '#F1F6F9',
            main: '#9BA4B5',
            contrastText: '#394867',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 426,
            md: 769,
            lg: 1025,
            xl: 1441,
        },
    },
})