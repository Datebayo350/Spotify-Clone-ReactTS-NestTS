import userReducer from '../__slices/user';
import artistReducer from '../__slices/artist';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../__slices/api';
export const store = configureStore({
  reducer: {
    user: userReducer,
    artist: artistReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectUserState = (state: RootState) => state.user;
export const selectArtistState = (state: RootState) => state.artist.value;
export const selectBackendApiState = (state: RootState) => state.backendApi;
