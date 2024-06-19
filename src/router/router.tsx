import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage";


let routes: RouteObject[];

routes = [{
    path: '', element: <MainLayout/>, children: [{
        index: true, element: <MoviesPage/>
    }]
}]

export const router = createBrowserRouter(routes)