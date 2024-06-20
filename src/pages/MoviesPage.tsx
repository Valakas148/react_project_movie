import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {movieAction} from "../redux/slices/MovieSlice";
import MoviesComponent from "../components/MoviesComponents/MoviesComponent";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {Pagination} from "@mui/material";

const MoviesPage = () => {

    let dispatch=useAppDispatch()

    let {currentPage, total_pages} = useAppSelector(state => state.movieSlice)

    useEffect(() => {
        dispatch(movieAction.loadMovies(currentPage))
    }, [currentPage]);

    const handleChange = (page:number)=> {
        dispatch(movieAction.SetCurrentPage(page))
    }

    return (
        <div>
            <Pagination
                count={total_pages ? (total_pages > 500 ? 500 : total_pages):100}
                page={currentPage}
                onChange={(_,page)=> handleChange(page)}
                color="primary"
                size="large"
            />
            <MoviesComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;