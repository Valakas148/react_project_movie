import React from 'react';
import {useAppSelector} from "../../redux/store";
import MovieComponent from "./MovieComponent";
import styles from './Movies.module.css'
import {Pagination} from "@mui/material";

const MoviesComponent = () => {

    const {movies} = useAppSelector(state => state.movieSlice)

    return (
        <div className={styles.Block}>
            {
                movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)
            }

        </div>
    );
};

export default MoviesComponent;