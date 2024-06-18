import {IMovieDiscoverPaginationModel} from "../models/IMovieDiscoverPaginationModel";
import {axiosInstance} from "./api.service";
import {urls} from "../urls/urls";
import {AxiosError} from "axios";

export const MovieService = {
    getAllMovies : async (page:string):Promise<IMovieDiscoverPaginationModel | null> => {
        try {
            const response= await axiosInstance.get<IMovieDiscoverPaginationModel>(urls.getMovies)
            return response.data
}

        catch (e) {
            const axiosError = e as AxiosError
            console.log(axiosError)
}
    return null
    }
}