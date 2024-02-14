import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type TInitialState = {
    albumId: number | null
}

const activeNavigation = createSlice({
   name: "albumId",
   initialState: {albumId: null} as TInitialState,
   reducers: {
      getAlbumId: (state, action: PayloadAction<number>) => {
         state.albumId = action.payload;
      },
   },
});

export const { getAlbumId } = activeNavigation.actions;
export const reducerAlbumId = activeNavigation.reducer;
