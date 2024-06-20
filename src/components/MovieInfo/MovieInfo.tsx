import React, {FC} from 'react';
import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";
import {useAppSelector} from "../../redux/store";
import {useLocation} from "react-router-dom";
import styles from "../MoviesComponents/Movie.module.css";



const MovieInfo = () => {

    const {state:{movie}} = useLocation()


    const image_movie = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

    return (
        <div>
            <h4>{movie.title}</h4>
            <img alt={movie.title} src={image_movie} className={styles.MovieImg}/>
        </div>
    );
};

export default MovieInfo;