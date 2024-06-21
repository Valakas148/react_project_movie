import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MovieService} from "../../services/movie.service";
import {AxiosError} from "axios";
import {IGenreCategoryModel} from "../../models/IGenreCategoryModel";

type MovieSliceType ={
    movies: IMovieDiscoverModel[];
    currentPage: number;
    total_pages: number | null;
    searchMovie: string;
    genres: IGenreCategoryModel[];
    selectedGenresID: number[]
}

const movieInitialState: MovieSliceType = {
    movies: [],
    currentPage: 1,
    total_pages: null,
    searchMovie: '',
    genres: [],
    selectedGenresID: []
}

const loadMovies = createAsyncThunk(
'MovieSlice/loadMovies',
async(currentPage: number, thunkAPI) =>{
        try{
            const movies = await MovieService.getAllMovies(currentPage)
            return thunkAPI.fulfillWithValue(movies?.results || [])
        }
        catch (e){
            const error =e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const loadSearchMovie = createAsyncThunk(
    'MovieSlice/loadSearchMovie',
    async({query,page}:{query:string,page:number},thunkAPI) =>{
        try{
            const searchMovies = await MovieService.getSearchMovie(query,page)
            return thunkAPI.fulfillWithValue(searchMovies?.results || [])
        }
        catch (e){
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const loadGenres = createAsyncThunk(
    'MovieSlice/loadGenred',
    async (_, thunkAPI) =>{
        try {
            const response = await MovieService.getGenres()
            return thunkAPI.fulfillWithValue(response?.genres)
        }catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error?.response?.data)
        }
    }
)
const loadMoviesByGenres = createAsyncThunk(
    'MovieSlice/loadMoviesByGenres',
    async ({genreIds, page}:{genreIds:number[],page:number}, thunkAPI) =>{
        try {
            const response = await MovieService.getMoviesByGenres(genreIds,page)
            return thunkAPI.fulfillWithValue(response?.results || [])
        }catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error?.response?.data)
        }
    }
)
export const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState: movieInitialState,
    reducers: {
        SetCurrentPage: (state,action) =>{
            state.currentPage = action.payload
        },
        SetSearchQuery: (state, action) =>{
            state.searchMovie = action.payload
        },
        SetSelectedGenresID: (state,action) =>{
            state.selectedGenresID = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadMovies.fulfilled, (state, action) =>{
                if(state){
                    state.movies = action.payload
                }
            })
            .addCase(loadSearchMovie.fulfilled, (state,action) => {
                if(state){
                    state.movies = action.payload
                }
            })
            .addCase(loadGenres.fulfilled, (state,action) =>{
                state.genres = action.payload || []
                console.log(state.genres)
            })
            .addCase(loadMoviesByGenres.fulfilled, (state, action)=>{
                state.movies = action.payload
            })
})

export const movieAction ={
    ...movieSlice.actions,
    loadMovies,
    loadSearchMovie,
    loadGenres,
    loadMoviesByGenres
}