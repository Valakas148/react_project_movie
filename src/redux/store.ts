import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {movieSlice} from "./slices/MovieSlice";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()

export const store = configureStore({
    reducer: {
        movieSlice: movieSlice.reducer
    }
})
