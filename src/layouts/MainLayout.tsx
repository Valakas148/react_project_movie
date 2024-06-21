import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import GenreLayout from "./Genre/GenreLayout";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <div>
                <GenreLayout/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;