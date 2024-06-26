import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import GenreComponent from "./GenreComponent";
import styles from './genres.module.css'

const GenresComponent = () => {

    const {genres} = useAppSelector(state => state.movieSlice)
    return (
        <div className={styles.genresDiv}>
            <div className={styles.title}><p>Додати Жанр:</p></div>
            {genres.map(genre => (
                <GenreComponent key={genre.id} genre={genre}/>
            ))}
        </div>
    );
};

export default GenresComponent;