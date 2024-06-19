import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {movieAction} from "../redux/slices/MovieSlice";
import MoviesComponent from "../components/MoviesComponents/MoviesComponent";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";

const MoviesPage = () => {

    let dispatch=useAppDispatch()

    useEffect(() => {
        dispatch(movieAction.loadMovies())
    }, []);

    return (
        <div>
            <MoviesComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;