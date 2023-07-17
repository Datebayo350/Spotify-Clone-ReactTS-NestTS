import { createSlice, PayloadAction, PrepareAction } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios';
import { useNavigate, NavigateFunction, redirect } from 'react-router-dom';

export type selectUserStateType = {
  value: {
    userLoggedIn: boolean,
    spotifyAccessToken: string,
    // [key:string]: unknown,
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
        
        //? May the authentication should be processed into a prepare function ( backend api call's) 

      
      },
      spotifyAccessTokenRequest: (state:selectUserStateType, action: PayloadAction<any>) => {
        console.log('action access token request :>> ', action);
      },
      spotifyLoginAndAuthorization:  (state:selectUserStateType, action: PayloadAction<any>) => {
        
        
        axios.get('http://localhost:8080/spotify-login/authorization',{
        })

      },
      spotifyLogin:  (state:selectUserStateType, action:PayloadAction<string>)  => {
        console.log('dans reducer');

      },
      
    }
});

export default userSlice.reducer;
export const {spotifyAccessTokenUpdate, spotifyLoginAndAuthorization, spotifyAccessTokenRequest} = userSlice.actions;