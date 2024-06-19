import React, {FC} from 'react';
import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";
import styles from './Movie.module.css'

interface IProps {
    movie: IMovieDiscoverModel
}
const MovieComponent:FC<IProps> = ({movie}) => {



    return (
        <div>
            <div className={styles.BlockMovie}>
                <a>
                    <img alt={movie.title} src={movie.backdrop_path}/>
                    <h4>{movie.title}</h4>
                </a>
            </div>
        </div>
    );
};

export default MovieComponent;