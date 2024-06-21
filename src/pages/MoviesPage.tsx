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


const MoviesPage = () => {

    let dispatch=useAppDispatch()

    let {currentPage, total_pages,searchMovie,selectedGenresID} = useAppSelector(state => state.movieSlice)

    console.log("MoviePage",selectedGenresID)

    useEffect(() => {
        if(searchMovie){
            dispatch(movieAction.loadSearchMovie({query:searchMovie,page:currentPage}))
            console.log("SEARCH")
        }else if (selectedGenresID.length > 0) {
            dispatch(movieAction.loadMoviesByGenres({ genreIds: selectedGenresID, page: currentPage }));
            console.log('selected')
        }
        else{
            dispatch(movieAction.loadMovies(currentPage))
            console.log("currentPage")
        }
    }, [currentPage,searchMovie,selectedGenresID]);

    const handleChange = (page:number)=> {
        dispatch(movieAction.SetCurrentPage(page))
    }

    return (
        <div className={styles.MoviesPageDiv}>
            <Pagination
                className={styles.PaginationTop && styles.Pagination}
                count={total_pages ? (total_pages > 500 ? 500 : total_pages) : 500}
                page={currentPage}
                onChange={(_, page) => handleChange(page)}
                color="primary"
                size="large"
                sx={{
                    '& .MuiPagination-ul': {
                        justifyContent: 'center',
                        margin: '20px'
                    },
                    '& .MuiPaginationItem-root': {
                        background: '#202020',
                        color: '#f3f3f3',
                        borderRadius: '6px',
                        '&:hover': {
                            background: 'lighten(#202020, 3%)',
                        },
                        '&.Mui-selected': {
                            background: 'lighten(#202020, 3%)',
                        },
                    },
                }}
            />
            <MoviesComponent/>
            <Pagination
                className={styles.PaginationBottom && styles.Pagination}
                count={total_pages ? (total_pages > 500 ? 500 : total_pages) : 100}
                page={currentPage}
                onChange={(_, page) => handleChange(page)}
                color="primary"
                size="large"
                sx={{
                    '& .MuiPagination-ul': {
                        justifyContent: 'center',
                        margin: '20px'
                    },
                    '& .MuiPaginationItem-root': {
                        background: '#202020',
                        color: '#f3f3f3',
                        borderRadius: '6px',
                        '&:hover': {
                            background: 'lighten(#202020, 3%)',
                        },
                        '&.Mui-selected': {
                            background: 'lighten(#202020, 3%)',
                        },
                    },
                }}
            />
        </div>
    );
};

export default MoviesPage;