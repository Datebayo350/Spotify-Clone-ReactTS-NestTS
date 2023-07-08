import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const artistSlice = createSlice({
    name: 'artist',
    initialState: {
        value: {},
    },
    reducers: {
        getAlbums: (state: {[key:string]: any}, action: PayloadAction<any>) => {
            state.value = {albums: action.payload}
        }
    }
})

export default artistSlice.reducer;
export const { getAlbums } = artistSlice.actions;
