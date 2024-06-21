import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage";
import React from "react";
import MovieInfo from "../components/MovieInfo/MovieInfo";


let routes: RouteObject[];

routes = [{
    path: '/', element: <MainLayout/>, children: [
        {index: true, element: <MoviesPage/>},
        {path:'movieInfo/:id', element: <MovieInfo/>},
        ]
}]

export const router = createBrowserRouter(routes)