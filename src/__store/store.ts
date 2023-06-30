
import { userSlice } from '../__slices/userSlice'
import { artistSlice } from '../__slices/artistSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store =  configureStore({
  reducer: {
    user: userSlice.reducer,
    artistAlbums: artistSlice.reducer
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const { updateSpotifyToken } = userSlice.actions
export const { getAlbums } = artistSlice.actions
export const selectuserSpotifyToken = (state: any) => state.user?.spotifyToken
export default userSlice.reducer;