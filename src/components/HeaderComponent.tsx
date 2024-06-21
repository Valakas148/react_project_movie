import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import styles from './Header.module.css'
import {useAppDispatch} from "../redux/store";
import {movieAction} from "../redux/slices/MovieSlice";
import {IFormModelInput} from "../models/IFormModelInput";
import SearchMoviesComponent from "./SearchMoviesComponents/SearchMoviesComponent";
import SearchPage from "../pages/SearchPage/SearchPage";

const HeaderComponent = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleHomeClick = () => {
        dispatch(movieAction.SetCurrentPage(1));
        dispatch(movieAction.SetSelectedGenresID([]));
        dispatch(movieAction.SetSearchQuery(''));
        navigate('/');
    };


    return (
        <div className={styles.HeaderDiv}>
            <div className={styles.ButtonsDiv}>
                <button className={styles.ButtonHome} onClick={handleHomeClick}>
                    Home
                </button>
            </div>
            <NavLink to={''} className={styles.NavLink} onClick={handleHomeClick}>
                <div className={styles.H3Div}>
                    <h3 className={styles.H3Header}>MOVIE DB</h3>
                </div>
            </NavLink>
            <div className={styles.RightSection}>
                <div className={styles.SearchDiv}>
                    <SearchPage/>
                </div>
                <div className={styles.UserIcon}>
                    <img width="25" height="25" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1"/>
                </div>
            </div>
        </div>

    );
};

export default HeaderComponent;