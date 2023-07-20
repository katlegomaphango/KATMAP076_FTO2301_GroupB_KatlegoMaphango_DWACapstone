import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const netlifyApi = createApi({
    reducerPath: 'netlifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://podcast-api.netlify.app',
    }),
    endpoints: (builder) => ({
        getAllShows: builder.query({ query: () => '/shows'}),
        getShowInfo: builder.query({ query: (showId) => `/id/${showId}`})
    })
})

export const {
    useGetAllShowsQuery,
    useGetShowInfoQuery
} = netlifyApi
