import {IMovieDiscoverModel} from "./IMovieDiscoverModel";

export interface IMovieDiscoverPaginationModel {
    page: number,
    results: IMovieDiscoverModel[],
    total_pages: number,
    total_results: number
}