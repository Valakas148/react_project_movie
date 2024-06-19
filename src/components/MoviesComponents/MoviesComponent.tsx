import React from 'react';
import {useAppSelector} from "../../redux/store";
import MovieComponent from "./MovieComponent";

const MoviesComponent = () => {

    const {movies} = useAppSelector(state => state.movieSlice)

    return (
        <div>
            {
                movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export default MoviesComponent;