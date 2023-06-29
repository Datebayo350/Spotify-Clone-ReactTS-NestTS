import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const artistSlice = createSlice({
    name: 'artist',
        initialState: {
            value: {},
        },
        reducers: {
            getAlbums: (state: {[key:string]: any}, action: PayloadAction<string>) => {
                state.value = action.payload
            }
        }
})