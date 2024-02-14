import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducerAlbumId } from "./slices";


export const store = configureStore({
   reducer: {
      reducerAlbumId
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const AppDispatch: () => AppDispatch = useDispatch;
export const RootState: TypedUseSelectorHook<RootState> = useSelector;
