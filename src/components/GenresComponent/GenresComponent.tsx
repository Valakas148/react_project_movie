import React from 'react';
import {useAppSelector} from "../../redux/store";
import GenreComponent from "./GenreComponent";
import styles from './genres.module.css'

const GenresComponent = () => {

    const {genres} = useAppSelector(state => state.movieSlice)


    if (!Array.isArray(genres)) {
        console.log(genres); // або ви можете повернути якийсь інший реактивний компонент або null
        console.log('aaaaaaaaaaa'); // або ви можете повернути якийсь інший реактивний компонент або null
    }

    return (
        <div className={styles.GenresDiv}>
{/*            {
                genres.map(genre => <GenreComponent key={genre.id} genre={genre}/>)
            }*/}
        </div>
    );
};

export default GenresComponent;