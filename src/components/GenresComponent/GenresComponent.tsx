import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import GenreComponent from "./GenreComponent";
import styles from './genres.module.css'
import {movieAction} from "../../redux/slices/MovieSlice";

const GenresComponent = () => {

    const {genres, selectedGenresID} = useAppSelector(state => state.movieSlice)
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieAction.loadMoviesByGenres())
        dispatch(movieAction.loadGenres)
        console.log('123')
    }, []);

    const handleChange = (genreId: number) => {
/*        setSelectedGenres(prevState => {
            if (prevState.includes(genreId)) {
                console.log('setSelectedGenres')
                return prevState.filter(id => id !== genreId);
            } else {
                return [...prevState, genreId];
            }
        });*/
        dispatch(movieAction.SetGenre(genreId))
        dispatch(movieAction.SetCurrentPage(1))

    }

    console.log(selectedGenres)

    return (
        <div className={styles.GenresDiv}>
            {
                genres.map(genre => <GenreComponent key={genre.id} genre={genre} onChange={handleChange} isChecked={selectedGenres.includes(genre.id)}/>)
            }
        </div>
    );
};

export default GenresComponent;