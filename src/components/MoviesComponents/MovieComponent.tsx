import React, {FC} from 'react';
import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";
import styles from './Movie.module.css'
import {NavLink} from "react-router-dom";
import StarRatingComponent from "../StarRating/StarRatingComponent";

interface IProps {
    movie: IMovieDiscoverModel
}
const MovieComponent:FC<IProps> = ({movie}) => {


    const image_movie = `https://image.tmdb.org/t/p/w300${movie.poster_path}`


    return (
        <div className={styles.BlockMovies}>
            <NavLink to={`movieInfo/${movie.id}`} state={{movie}} className={styles.BlockMovie}>
                <img alt={movie.title} src={image_movie} className={styles.MovieImg}/>
                <h4>{movie.title}</h4>
                <div className={styles.GenreBadges}>
                    {movie.genre_ids.map((genreId, index) => (
                        <span key={index} className={styles.GenreBadge}>
                            {genreId}
                        </span>
                    ))}
                </div>
                <StarRatingComponent rating={movie.vote_average}/>
            </NavLink>
        </div>
    );
};

export default MovieComponent;