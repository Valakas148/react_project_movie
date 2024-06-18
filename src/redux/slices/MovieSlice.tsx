import {IMovieDiscoverModel} from "../../models/IMovieDiscoverModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MovieService} from "../../services/movie.service";
import {AxiosError} from "axios";

type MovieSliceType ={
    movies: IMovieDiscoverModel[]
}

const movieInitialState: MovieSliceType = {
    movies: []
}

const loadMovies = createAsyncThunk(
'MovieSlice/loadMovies',
async(_, thunkAPI) =>{
        try{
            const movies = await MovieService.getAllMovies('1')
            return thunkAPI.fulfillWithValue(movies)
        }
        catch (e){
            const error =e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState: movieInitialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadMovies.fulfilled, (state, action) =>{
                state.movies = action.payload
            })
})

export const movieAction ={
    ...movieSlice.actions,
    loadMovies
}