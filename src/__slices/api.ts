import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'backendApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
    }),
    endpoints: builder => ({
        spotifyRefreshAccessToken: builder.query({
            query: () => '/spotify-login/refresh-token'
        }),
        updateUserInformations: builder.mutation({
            query: () => {
                return {
                    url:"/user/me/update",
                    method: "POST",
                    body: {
                        username: 'Nouveau Identifiant'
                    }
                }
            }
        }),
    })
    
});

export const { useSpotifyRefreshAccessTokenQuery } = apiSlice;