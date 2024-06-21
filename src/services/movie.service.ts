import {IMovieDiscoverPaginationModel} from "../models/IMovieDiscoverPaginationModel";
import {axiosInstance} from "./api.service";
import {urls} from "../urls/urls";
import {AxiosError} from "axios";
import {IGenreCategoryModel} from "../models/IGenreCategoryModel";
import {IGenreResponseModel} from "../models/IGenreResponseModel";
import {IMovieDiscoverModel} from "../models/IMovieDiscoverModel";

export const MovieService = {
    getAllMovies : async (page:number):Promise<IMovieDiscoverPaginationModel | null> => {
        try {
            const response= await axiosInstance.get<IMovieDiscoverPaginationModel>(`${urls.getMovies}?page=${page}`)
            return response.data
}

        catch (e) {
            const axiosError = e as AxiosError
            console.log(axiosError)
}
    return null
    },
    getSearchMovie: async (query:string,page:number):Promise<IMovieDiscoverPaginationModel | null> => {
        try {
            const response= await axiosInstance.get<IMovieDiscoverPaginationModel>(urls.getSearchMovies, {
                params: {
                    query,
                    page
                }
            })
            return response.data
        }
        catch (e){
            const axiosError = e as AxiosError
            console.log(axiosError)
            return null
        }
    },
    getGenres: async ():Promise<IGenreResponseModel | null> => {
        try {
            const response = await axiosInstance.get<IGenreResponseModel>(urls.getGenres)
            return response.data
        }catch (e) {
            const axiosError = e as AxiosError
            console.log(axiosError)
            return null
        }
    },
    getMoviesByGenres: async (genreIds: number[], page: number):Promise<IMovieDiscoverPaginationModel | null> => {
        try {
            const response = await axiosInstance.get<IMovieDiscoverPaginationModel>(urls.getMovies,{
                params:{
                    with_genres: genreIds,
                    page
                }
            })
            return response.data
        }catch (e) {
            const axiosError = e as AxiosError
            console.log(axiosError)
            return null
        }
    }
}