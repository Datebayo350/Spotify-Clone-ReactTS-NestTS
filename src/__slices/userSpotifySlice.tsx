import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { redirect, useNavigate } from 'react-router-dom';

export const userSpotifySlice = createSlice({
    name: 'userSpotify',
    initialState: {
      value: {}
    },
    reducers: {
      uptadeUserToken: (state: {[key:string]: any}, action: PayloadAction<string>) => {
        const navigate = useNavigate();
        
        console.log("update user spotify token from store");

        if (action.payload.length > 0) {
          //? Persistence de la connexion utilisateur
          console.log('Token dans le reducer updateUserToken  :>> ', action.payload);
          state.value = action.payload
          const userSpotifyTokenStringified = JSON.stringify(action.payload);
          localStorage.setItem("userSpotifyToken", userSpotifyTokenStringified);
          redirect('/');
          navigate('/');

        }

      }
    }
});
