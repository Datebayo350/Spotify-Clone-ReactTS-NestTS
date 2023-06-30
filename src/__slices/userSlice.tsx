import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
      value: {
        userLoggedIn: false,
      }
    },
    reducers: {

      updateSpotifyToken: (state: {[key:string]: any}, action: PayloadAction<string>) => {
        
        console.log("Action updateSpotifyToken");

        if (action.payload.length > 0) {
          console.log('state.value.user :>> ', state.value.user);
          localStorage.userSpotifyToken = JSON.stringify(action.payload);
          
          state.value = {
            spotifyToken: action.payload,
            userLoggedIn: !state.value.userLoggedIn
          };
          
          console.log("Action updateSpotifyToken, on enregistre dans le state et localStorage =>", state, localStorage);
        }

      }
      
    }
});

