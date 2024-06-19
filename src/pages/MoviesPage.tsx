import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {movieAction} from "../redux/slices/MovieSlice";
import MoviesComponent from "../components/MoviesComponents/MoviesComponent";

const MoviesPage = () => {

    let dispatch=useAppDispatch()

    useEffect(() => {
        dispatch(movieAction.loadMovies())
    }, []);

    return (
        <div>
            <MoviesComponent/>
        </div>
    );
};

export default MoviesPage;