import React, {useEffect} from 'react';
import {useAppDispatch} from "../../redux/store";
import {movieAction} from "../../redux/slices/MovieSlice";
import GenresComponent from "../../components/GenresComponent/GenresComponent";
import styles from './genreP.module.css'

const GenresPage = () => {

    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieAction.loadGenres())
        console.log('useEffectGenresPage')
    }, []);

    return (
        <div className={styles.GenreMainDiv}>
            <GenresComponent/>
        </div>
    );
};

export default GenresPage;