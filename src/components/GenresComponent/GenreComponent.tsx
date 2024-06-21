import React, {FC} from 'react';
import {IGenreCategoryModel} from "../../models/IGenreCategoryModel";

interface IProps{
    genre: IGenreCategoryModel
}
const GenreComponent:FC<IProps> = ({genre}) => {
    return (
        <div>
            <label>
                <input type="checkbox" value={genre.id}/>
                {genre.name}
            </label>
        </div>
    );
};

export default GenreComponent;