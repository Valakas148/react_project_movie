import React, {FC} from 'react';
import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";
import styles from './Movie.module.css'
import {Link, NavLink, useNavigate} from "react-router-dom";
import StarRatingComponent from "../StarRating/StarRatingComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {movieAction} from "../../redux/slices/MovieSlice";

interface IProps {
    movie: IMovieDiscoverModel
}
const MovieComponent:FC<IProps> = ({movie}) => {

    const { genres } = useAppSelector(state => state.movieSlice);

    const genreNames = movie.genre_ids.map(
        id => genres.find(genre => genre.id === id)?.name || 'Unknown'
    );
    const image_movie = `https://image.tmdb.org/t/p/w300${movie.poster_path}`


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleGenre = (genreId: number) => {
        dispatch(movieAction.SetGenre([genreId]));
        navigate('/');
    };

    return (
        <div className={styles.BlockMovies}>
            <div className={styles.GenreBadges}>
                {movie.genre_ids.map((id, index) => (
                    <NavLink
                        key={index}
                        to="/"
                        onClick={() => handleGenre(id)}
                        className={styles.GenreBadge}
                    >
                        {genreNames[index]}
                    </NavLink>
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