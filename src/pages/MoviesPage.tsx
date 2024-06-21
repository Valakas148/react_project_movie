import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {movieAction} from "../redux/slices/MovieSlice";
import MoviesComponent from "../components/MoviesComponents/MoviesComponent";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {Pagination} from "@mui/material";
import SearchMoviesComponent from "../components/SearchMoviesComponents/SearchMoviesComponent";
import searchMoviesComponent from "../components/SearchMoviesComponents/SearchMoviesComponent";
import {useForm} from "react-hook-form";
import {IFormModelInput} from "../models/IFormModelInput";
import {useNavigate} from "react-router-dom";
import styles from './MoviesPage.module.css'
import GenresComponent from "../components/GenresComponent/GenresComponent";


const MoviesPage = () => {

    let dispatch=useAppDispatch()

    let {currentPage, total_pages,searchMovie,selectedGenresID} = useAppSelector(state => state.movieSlice)

    useEffect(() => {
        if(searchMovie){
            dispatch(movieAction.loadSearchMovie({query:searchMovie,page:currentPage}))
            console.log("SEARCH")
        }else if(selectedGenresID.length > 0 && (searchMovie.length === 0)){
            dispatch(movieAction.loadMoviesByGenres())
            console.log("selectedGenresID")
        }
        else{
            dispatch(movieAction.loadMovies(currentPage))
            console.log("currentPage")
        }
    }, [currentPage,searchMovie]);

    const handleChange = (page:number)=> {
        dispatch(movieAction.SetCurrentPage(page))
        console.log('page')
        console.log(page)
    }

    const navigate = useNavigate()

    const foundMovie = (data: IFormModelInput) =>{
        if(data){

            dispatch(movieAction.SetSearchQuery(data.searchWord))
            console.log('foundmovie')
        }
        else {navigate('/movie')}

    }

    return (
        <div className={styles.MoviesPageDiv}>
            <SearchMoviesComponent onSubmit={foundMovie} />
            <Pagination
                className={styles.PaginationTop}
                count={total_pages ? (total_pages > 500 ? 500 : total_pages) : 100}
                page={currentPage}
                onChange={(_, page) => handleChange(page)}
                color="primary"
                size="large"
            />
            <MoviesComponent/>
            <Pagination
                className={styles.PaginationBottom}
                count={total_pages ? (total_pages > 500 ? 500 : total_pages) : 100}
                page={currentPage}
                onChange={(_, page) => handleChange(page)}
                color="primary"
                size="large"
            />
        </div>
    );
};

export default MoviesPage;