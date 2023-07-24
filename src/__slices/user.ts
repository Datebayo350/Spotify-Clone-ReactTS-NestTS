import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../__store/store';
export type SelectUserStateType = {
  
  user: {
    [key:string]: any
  } | null,
  spotifyAccessToken: {
    access_token:string,
    token_type:string,
    expires_in:number,
    scope:string,
  } | null,
  
  [key:string]: any
};

const initialState = {
  user: null,
  spotifyAccessToken: null,
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

      setCredentials: (state: SelectUserStateType, action: PayloadAction<SelectUserStateType>) => {
        const { user, userLoggedIn, spotifyAccessToken} = action.payload;
        state.user = user;
        state.spotifyAccessToken = spotifyAccessToken;
        state.userLoggedIn = userLoggedIn;
      },
      
      logOut : ( state: SelectUserStateType, action: PayloadAction) =>{
        localStorage.removeItem('userIsLoggedIn');
        state.user = null
        state.spotifyAccessToken = null;
      },

    },
  
});
 

export default userSlice.reducer;
export const {setCredentials, logOut} = userSlice.actions
export const selectCurrentUSer = (state:RootState) => state.user.user
export const selectCurrentUserAccessToken = (state:RootState) => state.user.spotifyAccessToken