import { apiSlice } from './api';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    spotifyLogin: builder.query({
      query: () => '/spotify-login/authorization',
    }),

    spotifyRefreshAccessToken: builder.query({
      query: () => '/spotify-login/refresh-token',
    }),
  }),
});

export const { useSpotifyLoginQuery, useSpotifyRefreshAccessTokenQuery } = authApiSlice;
