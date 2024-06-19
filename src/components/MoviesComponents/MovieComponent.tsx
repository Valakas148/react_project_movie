import React, {FC} from 'react';
import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";
import styles from './Movie.module.css'

interface IProps {
    movie: IMovieDiscoverModel
}
const MovieComponent:FC<IProps> = ({movie}) => {


    const image_movie = `https://image.tmdb.org/t/p/w300${movie.poster_path}`


    return (
        <div className={styles.BlockMovies}>
                <a className={styles.BlockMovie}>
                    <img alt={movie.title} src={image_movie} className={styles.MovieImg}/>
                    <h4>{movie.title}</h4>
                </a>
        </div>
    );
};

export default MovieComponent;