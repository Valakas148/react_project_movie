import React, {FC} from 'react';
import {IGenreCategoryModel} from "../../models/IGenreCategoryModel";
import styles from './genre.module.css'

/*interface IProps{
    genre: IGenreCategoryModel,
    isChecked: boolean,
    onChange: (genreID:number) => void
}*/
interface IProps {
    genre: IGenreCategoryModel
}
const GenreComponent:FC<IProps>= ({genre}) => {


/*    const handleCheck = () =>{
        onChange(genre.id)
        console.log('handleCheck')
    }*/

    return (
        <div className={styles.GenreItem}>
            <label className={styles.GenreLabel}>
                <input type="checkbox" value={genre.id} className={styles.GenreCheckbox}
                      />
                {genre.name}
            </label>
            {/*            <label className={styles.GenreLabel}>
                <input type="checkbox" value={genre.id} onChange={handleCheck} className={styles.GenreCheckbox} checked={isChecked}/>
                {genre.name}
            </label>*/}
        </div>
    );
};

export default GenreComponent;