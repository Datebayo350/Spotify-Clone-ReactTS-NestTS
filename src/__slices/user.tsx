import { createSlice, PayloadAction, PrepareAction } from '@reduxjs/toolkit'
import { NavigateFunction, redirect } from 'react-router-dom';

export type selectUserStateType = {
  value: {
    userLoggedIn: boolean,
    spotifyAccessToken: string,
    [key:string]: unknown,
  }
};

const initialState = {
  value: {
    userLoggedIn: false,
    spotifyAccessToken:"",
  }
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

      spotifyAccessTokenUpdate: (state:selectUserStateType, action: PayloadAction<string>) => {
        
        //? May the authentication shoukd be processed into a prepare function ( backend api call's) 

        /** Verification to determine if it's an update token or a logout desire */ 
        const tokenDeletedFromLocalStorage = localStorage.userspotifyAccessToken === undefined ? true : false
        
        /** If it's an update token */
        if (action.payload.length > 0) {
          
          state.value = {
            spotifyAccessToken: action.payload,
            userLoggedIn: tokenDeletedFromLocalStorage ? !state.value.userLoggedIn : true
          };
          
        }

      },

      spotifyLoginAndAuthorization:  (state:selectUserStateType, action: PayloadAction<any>) => {
        //TODO : Curently authentication is based in "Implicit Grant" mode, for maintenability and improvment, it must follow the "Authorization code" one : https://developer.spotify.com/documentation/web-api/tutorials/code-flow

        /** Authentication window dimensions */
        const width = 800;
        const height = 600;
        const left = screen.width / 2 - width / 2;
        const top = screen.height / 2 - height / 2;

        /**URI Parameters */
        //TODO: For security, encode parameters with encodeURIComponents : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        //TODO: Must add and state parameter (randomly generated value who need to be the same once the user grant access)
        const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID; 
        const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI; 
        const response_type='token';
        const spotifyState='';
        const show_dialog = true;
        const scope = 'user-read-private user-read-email'
        
        window.open(
          `https://accounts.spotify.com/fr/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=${show_dialog}`,
          "Login with Spotify",
          `width=${width},height=${height},top=${top},left=${left}`
        );
          
      },
    }
});

export default userSlice.reducer;
export const {spotifyAccessTokenUpdate, spotifyLoginAndAuthorization,} = userSlice.actions;