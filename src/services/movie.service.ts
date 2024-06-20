import {IMovieDiscoverPaginationModel} from "../models/IMovieDiscoverPaginationModel";
import {axiosInstance} from "./api.service";
import {urls} from "../urls/urls";
import {AxiosError} from "axios";

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
    }
}