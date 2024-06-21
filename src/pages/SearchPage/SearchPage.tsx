import React from 'react';
import {useAppDispatch} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {movieAction} from "../../redux/slices/MovieSlice";
import {IFormModelInput} from "../../models/IFormModelInput";
import SearchMoviesComponent from "../../components/SearchMoviesComponents/SearchMoviesComponent";

const SearchPage = () => {


    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleSearchSubmit = (data: IFormModelInput) => {
        dispatch(movieAction.SetSearchQuery(data.searchWord));
        dispatch(movieAction.SetCurrentPage(1));
        navigate('/'); // Перенаправлення на сторінку фільмів після пошуку
    };


    return (
        <div>
            <SearchMoviesComponent onSubmit={handleSearchSubmit}/>
        </div>
    );
};

export default SearchPage;