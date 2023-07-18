import { createSlice } from '@reduxjs/toolkit'

export type selectUserStateType = {
  value: {
    userLoggedIn: boolean,
    spotifyAccessToken: string,
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

    },
  
});
 

export default userSlice.reducer;