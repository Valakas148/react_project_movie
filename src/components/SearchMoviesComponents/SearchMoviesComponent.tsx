import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IFormModelInput} from "../../models/IFormModelInput";
import styles from './SearchComponent.module.css'

interface IProps{
    onSubmit: (data:IFormModelInput) => void
}
const SearchMoviesComponent:FC<IProps> = ({onSubmit}) => {



    const{register,handleSubmit,reset} = useForm<IFormModelInput>()


    const foundMovie = (data: IFormModelInput) =>{
        onSubmit(data);
        reset();
    }

    return (
        <div className={styles.SearchComponent}>
            <form onSubmit={handleSubmit(foundMovie)} className={styles.SearchForm}>
                <input type="text" {...register('searchWord')} placeholder="Type name of movie..."
                       className={styles.InputSearch}/>
                <button type="submit" className={styles.ButtonSearch}>
                    <img src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search"
                         className={styles.SearchIcon}/>
                </button>
            </form>
        </div>
    );
};

export default SearchMoviesComponent;