import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {movieAction} from "../redux/slices/MovieSlice";
import MoviesComponent from "../components/MoviesComponents/MoviesComponent";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {Pagination} from "@mui/material";
import SearchMoviesComponent from "../components/SearchMoviesComponents/SearchMoviesComponent";
import searchMoviesComponent from "../components/SearchMoviesComponents/SearchMoviesComponent";

const MoviesPage = () => {

    let dispatch=useAppDispatch()

    let {currentPage, total_pages,searchMovie} = useAppSelector(state => state.movieSlice)

    useEffect(() => {
        if(searchMovie){
            dispatch(movieAction.loadSearchMovie({query:searchMovie,page:currentPage}))
        }else{
            dispatch(movieAction.loadMovies(currentPage))
        }
    }, [currentPage]);

    const handleChange = (page:number)=> {
        dispatch(movieAction.SetCurrentPage(page))
        console.log('page')
        console.log(page)
    }

    return (
        <div>
            <SearchMoviesComponent/>
            <Pagination
                count={total_pages ? (total_pages > 500 ? 500 : total_pages):100}
                page={currentPage}
                onChange={(_,page)=> handleChange(page)}
                color="primary"
                size="large"
            />
            <MoviesComponent/>
            <Pagination
                count={total_pages ? (total_pages > 500 ? 500 : total_pages):100}
                page={currentPage}
                onChange={(_,page)=> handleChange(page)}
                color="primary"
                size="large"
            />
        </div>
    );
};

export default MoviesPage;