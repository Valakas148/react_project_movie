import React, {FC} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import styles from "../MoviesComponents/Movie.module.css";
import style1 from "./Movie.module.css"
import StarRatingComponent from "../StarRating/StarRatingComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {movieAction} from "../../redux/slices/MovieSlice";



const MovieInfo = () => {

    const {state:{movie}} = useLocation()
    const { genres } = useAppSelector(state => state.movieSlice);

    const genreNames = movie.genre_ids.map((id: number) =>
        genres.find(genre => genre.id === id)?.name || 'Unknown'
    );

    const image_movie = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    const backdrop_movie = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const handleGenre = (genreId: number) => {
        dispatch(movieAction.SetSingleGenreID(genreId));
        dispatch(movieAction.loadMoviesByBadgeGenre({genreId,page:1}))
        navigate('/');
    };
    return (
        <div className={style1.MovieInfoContainer}>
            <div className={style1.MovieInfoBlock}>
                <img alt={movie.title} src={image_movie} className={style1.MovieImg}/>
                <div className={style1.MovieDetails}>
                    <h4 className={style1.TitleH4}>{movie.title}</h4>
                    <p className={style1.OriginalLang}>Original Language: <b>{movie.original_language}</b></p>
                    <div className={style1.Genres}>
                        {movie.genre_ids.map((id:number, index:number) => (
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
                    <StarRatingComponent rating={movie.vote_average}/>
                    <p className={style1.Overview}><b>Overview:</b> <br/> {movie.overview}</p>
                    <img alt={movie.title} src={backdrop_movie} className={style1.MovieBackgroundImg}/>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;