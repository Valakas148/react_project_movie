import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import GenreLayout from "./Genre/GenreLayout";
import styles from './MainL.module.css'

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <div className={styles.MainBlock}>
                <GenreLayout/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;