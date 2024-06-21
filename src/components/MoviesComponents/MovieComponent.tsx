import React, {FC} from 'react';
import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";
import styles from './Movie.module.css'
import {NavLink} from "react-router-dom";
import StarRatingComponent from "../StarRating/StarRatingComponent";
import {useAppSelector} from "../../redux/store";

interface IProps {
    movie: IMovieDiscoverModel
}
const MovieComponent:FC<IProps> = ({movie}) => {

    const { genres } = useAppSelector(state => state.movieSlice);

    const genreNames = movie.genre_ids.map(
        id => genres.find(genre => genre.id === id)?.name || 'Unknown'
    );
    const image_movie = `https://image.tmdb.org/t/p/w300${movie.poster_path}`


    return (
        <div className={styles.BlockMovies}>
            <div className={styles.GenreBadges}>
                {genreNames.map((name, index) => (
                    <span key={index} className={styles.GenreBadge}>
            {name}
          </span>
                ))}
            </div>
            <NavLink to={`movieInfo/${movie.id}`} state={{movie}} className={styles.BlockMovie}>
                <img alt={movie.title} src={image_movie} className={styles.MovieImg}/>
                <h4>{movie.title}</h4>
                <StarRatingComponent rating={movie.vote_average}/>
            </NavLink>
        </div>
    );
};

export default MovieComponent;