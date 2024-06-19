import React, {FC} from 'react';
import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";

interface IProps {
    movie: IMovieDiscoverModel
}
const MovieComponent:FC<IProps> = ({movie}) => {



    return (
        <div>
            <div>
                <p>{movie.title}</p>
            </div>
        </div>
    );
};

export default MovieComponent;