import React, {useEffect} from 'react';
import {useAppDispatch} from "../../redux/store";
import {movieAction} from "../../redux/slices/MovieSlice";
import GenresComponent from "../../components/GenresComponent/GenresComponent";

const GenresPage = () => {

    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieAction.loadGenres())
    }, []);

    return (
        <div>
            <GenresComponent/>
        </div>
    );
};

export default GenresPage;