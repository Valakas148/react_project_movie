import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {}
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>