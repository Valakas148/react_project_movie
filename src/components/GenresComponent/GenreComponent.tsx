import React, {FC} from 'react';
import {IGenreCategoryModel} from "../../models/IGenreCategoryModel";
import styles from './genre.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {movieAction} from "../../redux/slices/MovieSlice";

/*interface IProps{
    genre: IGenreCategoryModel,
    isChecked: boolean,
    onChange: (genreID:number) => void
}*/
interface IProps {
    genre: IGenreCategoryModel
}
const GenreComponent:FC<IProps>= ({genre}) => {


    const dispatch = useAppDispatch();
    const selectedGenresID = useAppSelector(state => state.movieSlice.selectedGenresID);

    const handleCheck = () => {
        const updatedGenres = selectedGenresID.includes(genre.id)
            ? selectedGenresID.filter(id => id !== genre.id)
            : [...selectedGenresID, genre.id];

        dispatch(movieAction.SetSelectedGenresID(updatedGenres));
    };

    return (
        <div className={styles.genreItem}>
            <label className={styles.genreLabel}>
                <input
                    type="checkbox"
                    value={genre.id}
                    className={styles.genreCheckbox}
                    checked={selectedGenresID.includes(genre.id)}
                    onChange={handleCheck}
                />
                {genre.name}
                <hr/>
            </label>
        </div>
    );
};

export default GenreComponent;