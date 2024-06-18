import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


let routes: RouteObject[];

routes = [{
    path: '', element: <MainLayout/>, children: [{

    }]
}]

export const router = createBrowserRouter(routes)