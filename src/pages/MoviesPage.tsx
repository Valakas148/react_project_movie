import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {movieAction} from "../redux/slices/MovieSlice";
import MoviesComponent from "../components/MoviesComponents/MoviesComponent";
import {Pagination} from "@mui/material";
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
                        background: '#9400D3',
                        color: '#f3f3f3',
                        borderRadius: '50%',
                        padding: '8px',
                        '&:hover': {
                            background: '#FFB6C1',
                        },
                        '&.Mui-selected': {
                            background: '#DAA520',
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
                        background: '#9400D3',
                        color: '#f3f3f3',
                        borderRadius: '50%',
                        padding: '8px',
                        '&:hover': {
                            background: '#FFB6C1',
                        },
                        '&.Mui-selected': {
                            background: '#DAA520',
                        },
                    },
                }}
            />
        </div>
    );
};

export default MoviesPage;