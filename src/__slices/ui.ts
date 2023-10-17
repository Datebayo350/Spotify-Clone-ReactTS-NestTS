import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../__store/store';

export type UiStateType = {
  navBarExpendend: boolean;
  trackPlayerContainerDisplayed: boolean;
  trackOnPause: boolean;
  trackLiked: boolean;
};

const initialState = {
  navBarExpendend: false,
  trackPlayerContainerDisplayed: true,
  trackOnPause: true,
  trackLiked: false,
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    resizeNavbar: (state: UiStateType) => {
      state.navBarExpendend = !state.navBarExpendend;
    },
    displayTrackPlayerContainer: (state: UiStateType) => {
      state.trackPlayerContainerDisplayed = !state.trackPlayerContainerDisplayed;
    },
    toggleTrackOnPause: (state: UiStateType) => {
      state.trackOnPause = !state.trackOnPause;
    },
    toggleTrackLiked: (state: UiStateType) => {
      state.trackLiked = !state.trackLiked;
    },
  },
});

export default uiSlice.reducer;
export const { resizeNavbar, toggleTrackOnPause, toggleTrackLiked, displayTrackPlayerContainer } = uiSlice.actions;
export const selectNavbarExpended = (state: RootState) => state.ui.navBarExpendend;
export const selectTrackOnPause = (state: RootState) => state.ui.trackOnPause;
export const selectTrackLiked = (state: RootState) => state.ui.trackLiked;
export const selectTrackPlayerContainerDisplayed = (state: RootState) =>
  state.ui.trackPlayerContainerDisplayed;
