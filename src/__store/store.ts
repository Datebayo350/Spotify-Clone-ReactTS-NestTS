import { configureStore } from '@reduxjs/toolkit'
import { userSpotifySlice } from '../__slices/userSpotifySlice'
import { artistSlice } from '../__slices/artistSlice'

export const store =  configureStore({
  reducer: {
    userSpotify: userSpotifySlice.reducer,
    artistAlbums: artistSlice.reducer
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const { uptadeUserToken } = userSpotifySlice.actions
export const { getAlbums } = artistSlice.actions
export const selectuserSpotifyToken = (state: any) => state.userSpotifyToken?.token
export default userSpotifySlice.reducer;