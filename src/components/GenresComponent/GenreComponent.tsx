import React, {FC} from 'react';
import {IGenreCategoryModel} from "../../models/IGenreCategoryModel";
import styles from './genre.module.css'

interface IProps{
    genre: IGenreCategoryModel
}
const GenreComponent:FC<IProps> = ({genre}) => {

    const handleCheck = () =>{

    }

    return (
        <div className={styles.GenreItem}>
            <label className={styles.GenreLabel}>
                <input type="checkbox" value={genre.id} onChange={handleCheck} className={styles.GenreCheckbox}/>
                {genre.name}
            </label>
        </div>
    );
};

export default GenreComponent;