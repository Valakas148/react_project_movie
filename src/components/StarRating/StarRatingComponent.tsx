import React, {FC} from 'react';
import {Rating} from "@mui/material";

interface IProps{
    rating:number
}
const StarRatingComponent:FC<IProps> = ({rating}) => {

    return (
        <div>
            <Rating value={rating} readOnly precision={0.1} max={10} />
        </div>
    );
};

export default StarRatingComponent;