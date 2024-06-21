import React from 'react';
import styles from './Genre.module.css'
import GenresPage from "../../pages/GenresPage/GenresPage";

const GenreLayout = () => {



    return (
        <div className={styles.GenreLayout}>
            <GenresPage/>
        </div>
    );
};

export default GenreLayout;