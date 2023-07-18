
import userReducer  from '../__slices/user'
import artistReducer  from '../__slices/artist'
import { configureStore } from '@reduxjs/toolkit'

export const store =  configureStore({
  reducer: {
    user: userReducer,
    artist: artistReducer
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const selectUserState = (state: RootState) =>  state.user.value;
export const selectArtistState = (state: RootState) => state.artist.value;

